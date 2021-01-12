export const notificationListener = () => {
  navigator.serviceWorker.addEventListener("message", ({ data }) => {
    //handle message
    const message = data["firebase-messaging-msg-data"];
    console.log("message: ", message);
  });
};
