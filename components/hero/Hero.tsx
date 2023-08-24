import styles from './hero.module.css';
import DownloadButton from '../Download/DownloadGame';
import { ImageSlide, Login } from '..';

const Hero = () => {
  
  const filePath = '';

  return (
    <main className={`parent`}>
      <section className={`${styles.mainContainer}`}>
        <div className={`${styles.imageSection}`}>
          <ImageSlide />
        </div>
        <div className={`${styles.rightContainer}`}>
          <div className={`${styles.loginSection}`}>
            <Login />
          </div>
          <div className={`${styles.downloadSection}`}>
            <DownloadButton 
              filePath={filePath}
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Hero