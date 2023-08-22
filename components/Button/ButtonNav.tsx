import styles from './button-nav.module.css';

interface ButtonProps {
  onClick: () => void;
  href: string;
  children: React.ReactNode;
  className: string;
}

const ButtonNav: React.FC<ButtonProps> = ({ onClick, href, children, className }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      <a className={`anchor`} href={href}>
        {children}
      </a>
    </button>
  )
}

export default ButtonNav