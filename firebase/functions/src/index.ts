import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

import { TagMessage, TagSummary } from "./types";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

export const newTagMessage = functions.database
  .ref(`/tags/{tag_id}/{message_id}`)
  .onCreate((snap, context) => {
    const m: TagMessage = snap.val();
    const tag_id = context.params["tag_id"];

    return admin
      .database()
      .ref(`/tagsList/${tag_id}`)
      .transaction((val: TagSummary) => {
        const s: TagSummary = {
          count: !!val ? val.count + 1 : 1,
          msg: m.msg,
          tm: admin.database.ServerValue.TIMESTAMP
        };

        return s;
      });
  });
