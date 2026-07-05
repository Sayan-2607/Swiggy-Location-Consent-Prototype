interface ToastProps {
  visible: boolean;
  message: string;
}

export default function Toast({ visible, message }: ToastProps) {
  return <div className={visible ? "toast show" : "toast"}>{message}</div>;
}
