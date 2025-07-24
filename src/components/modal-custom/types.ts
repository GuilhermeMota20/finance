export type ModalCustomProps = {
  isOpen: boolean;
  onClose: () => void;
  isForm?: boolean;
  onSubmit?: () => void;
  title?: string;
  description?: string;
  actions?: React.ReactNode;
  children?: React.ReactNode;
  ariaLabelledBy?: string;
  ariaDescribedBy?: string;
  fullScreen?: boolean;
};