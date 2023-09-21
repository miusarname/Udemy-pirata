import React from "react";
import { useDiscordOAuth2 } from "discord-oauth2";

const DiscordLoginButton = () => {
  const { login } = useDiscordOAuth2();

  return (
    <button onClick={login}>Login with Discord</button>
  );
};
export default DiscordLoginButton;