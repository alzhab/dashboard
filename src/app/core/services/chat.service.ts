import { Injectable } from "@angular/core";
import { UnreadMail } from "../models";

@Injectable({
  providedIn: "root"
})
export class ChatService {
  private unreadMailList: UnreadMail[] = [
    {
      author: "somebody",
      description: "notification",
      avatar: "avatar.jpg"
    },
    {
      author: "somebody",
      description: "notification",
      avatar: "avatar.jpg"
    },
    {
      author: "somebody",
      description: "notification",
      avatar: "avatar.jpg"
    },
    {
      author: "somebody",
      description: "notification",
      avatar: "avatar.jpg"
    },
    {
      author: "somebody",
      description: "notification",
      avatar: "avatar.jpg"
    }
  ];

  private filterList = ["date", "alph", "online"];
  private activeFilter = this.filterList[0];

  private tabsList = [
    { icon: "inbox", text: "inbox" },
    { icon: "send", text: "send" },
    { icon: "delete", text: "trash" }
  ];
  private activeTab = this.tabsList[0].text;

  private mailsList = [
    {
      avatar: "author1.png",
      name: "Michelle Stewart",
      date: "Today, 5:32 PM",
      readed: true,
      message: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
          ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
          labore et dolore magnam aliquam quaerat voluptatem.
      `
    },
    {
      avatar: "author1.png",
      name: "Michelle Stewart",
      date: "Today, 5:32 PM",
      readed: true,
      message: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
          ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
          labore et dolore magnam aliquam quaerat voluptatem.
      `
    },
    {
      avatar: "author1.png",
      name: "Michelle Stewart",
      date: "Today, 5:32 PM",
      readed: true,
      message: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
          ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
          labore et dolore magnam aliquam quaerat voluptatem.
      `
    },
    {
      avatar: "author1.png",
      name: "Michelle Stewart",
      date: "Today, 5:32 PM",
      readed: true,
      message: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
          ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
          labore et dolore magnam aliquam quaerat voluptatem.
      `
    },
    {
      avatar: "author1.png",
      name: "Michelle Stewart",
      date: "Today, 5:32 PM",
      readed: false,
      message: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
          ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
          labore et dolore magnam aliquam quaerat voluptatem.
      `
    },
    {
      avatar: "author1.png",
      name: "Michelle Stewart",
      date: "Today, 5:32 PM",
      readed: false,
      message: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
          ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
          labore et dolore magnam aliquam quaerat voluptatem.
      `
    }
  ];

  private activeMail = this.mailsList[0];

  constructor() {}

  /*----------  Функции для не прочитанных сообщений  ----------*/
  getUnreadedMessage(): UnreadMail[] {
    return this.unreadMailList;
  }

  /*----------  Функции для не фиьлтра  ----------*/

  getFilterList() {
    return this.filterList;
  }

  getActiveFilter() {
    return this.activeFilter;
  }

  setActiveFilter(value) {
    this.activeFilter = value;
  }

  /*----------  Функции для панелей  ----------*/

  getTabsList() {
    return this.tabsList;
  }

  getActiveTab() {
    return this.activeTab;
  }

  setActiveTab(value) {
    this.activeTab = value;
  }

  /*----------  Функции для писем  ----------*/
  getMailsList() {
    return this.mailsList;
  }

  getActiveMail() {
    return this.activeMail;
  }

  setActiveMail(mail) {
    this.activeMail = mail;
  }
}
