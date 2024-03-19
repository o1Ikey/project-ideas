import Image from "@editorjs/image";
import Quote from "@editorjs/quote";
import Market from "@editorjs/marker";
import InlineCode from "@editorjs/inline-code";
import Embed from "@editorjs/embed";
import Header from "@editorjs/header";
import List from "@editorjs/list";

const uploadImageByFile = (e) => {};

const uploadImageByURL = (e) => {
  const link = new Promise((resolve, rejects) => {
    try {
      resolve(e);
    } catch (error) {
      rejects(error);
    }
  });
  return link.then((url) => {
    return {
      success: 1,
      file: { url },
    };
  });
};

export const tools = {
  // embed: Embed,
  // image: {
  //   class: Image,
  //   config: {
  //     uploader: {
  //       uploadByFile: uploadImageByFile,
  //       uploadByUrl: uploadImageByURL,
  //     },
  //   },
  // },
  // list: {
  //   class: List,
  //   inlineToolbar: true,
  // },
  // header: {
  //   class: Header,
  //   config: {
  //     placeholder: "Type Heading...",
  //     levels: [2, 3],
  //     defaultLevel: 2,
  //   },
  // },
  // quote: {
  //   class: Quote,
  //   inlineToolbar: true,
  // },
  // market: Market,
  // inlineCode: InlineCode,
  heading: Header,
  list: List,
};
