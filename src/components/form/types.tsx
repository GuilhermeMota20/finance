import type { JSX } from "react";

export type Props = {
  children: JSX.Element | JSX.Element[];
  handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
};
