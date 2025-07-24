import type { Props } from './types';

export const Form = ({ children, handleSubmit }: Props) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        {children}
      </form>
    </>
  );
};
