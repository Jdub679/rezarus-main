import styles from './button.module.css';

interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  href?: string;
  children?: React.ReactNode;
  className?: string;
}

const Button = ({ onClick, href, children, className, type="button", ...props }: ButtonProps) => {
  return (
    <button 
      className={`${styles.button} ${className}`} 
      onClick={onClick}
      type={type}
      {...props}
    >
      <a className={`${styles.anchor}`} href={href}>
        {children}
      </a>
    </button>
  )
}

export default Button