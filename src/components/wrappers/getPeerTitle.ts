/*
 * https://github.com/morethanwords/tweb
 * Copyright (C) 2019-2021 Eduard Kuzmenko
 * https://github.com/morethanwords/tweb/blob/master/LICENSE
 */

import _limitSymbols from '../../helpers/string/limitSymbols';
import {Chat} from '../../layer';
import getPeerActiveUsernames from '../../lib/appManagers/utils/peers/getPeerActiveUsernames';
import I18n from '../../lib/langPack';
import apiManagerProxy from '../../lib/mtproto/mtprotoworker';
import wrapEmojiText from '../../lib/richTextProcessor/wrapEmojiText';
import rootScope from '../../lib/rootScope';

type GetPeerTitleOptions = {
  peerId: PeerId,
  plainText?: boolean,
  onlyFirstName?: boolean,
  limitSymbols?: number,
  threadId?: number,
  useManagers?: boolean
} & Pick<WrapSomethingOptions, 'managers'>;

export default async function getPeerTitle<
  T extends GetPeerTitleOptions,
  R = T['plainText'] extends true ? string : DocumentFragment
>(
  options: T
): Promise<R> {
  const {
    peerId = rootScope.myId,
    plainText,
    onlyFirstName,
    limitSymbols,
    managers = rootScope.managers,
    useManagers,
    threadId
  } = options;

  let title = '';
  if(peerId.isUser()) {
    const user = useManagers ? await managers.appUsersManager.getUser(peerId.toUserId()) : apiManagerProxy.getUser(peerId.toUserId());
    if(user) {
      if(user.first_name) title += user.first_name;
      if(user.last_name && (!onlyFirstName || !title)) title += ' ' + user.last_name;
    }

    if(!title) title = !user || user.pFlags.deleted ? I18n.format(onlyFirstName ? 'Deleted' : 'HiddenName', true) : getPeerActiveUsernames(user)[0] || '';
    else title = title.trim();
  } else {
    if(threadId) {
      const topic = await managers.dialogsStorage.getForumTopic(peerId, threadId);
      title = topic?.title || '';
    }

    if(!title) {
      const chat = (useManagers ? managers.appChatsManager.getChat(peerId.toChatId()) : apiManagerProxy.getChat(peerId.toChatId())) as Chat.chat;
      title = chat?.title || '';
    }

    if(onlyFirstName) {
      title = title.split(' ')[0];
    }
  }

  if(limitSymbols !== undefined) {
    title = _limitSymbols(title, limitSymbols, limitSymbols);
  }

  return plainText ? title : wrapEmojiText(title) as any;
}
