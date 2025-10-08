import app from "../app.mjs";

const server = app.listen(process.env.PORT || 3000, () => {
  const { port } = server.address();
  console.log(`SERVER LISTENING ON PORT ${port}`);
});
