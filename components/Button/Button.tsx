import styles from './button.module.css';
import Link from 'next/link';

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
      <span className={`${styles.spanTop}`}></span>
      <Link className={`${styles.anchor}`} href={`/${href}`}>
        {children}
      </Link>
      <span className={`${styles.spanBottom}`}></span>
    </button>
  )
}

export default Button