import styles from './hero.module.css';
import DownloadButton from '../Download/DownloadGame';
import { ImageSlide, Login } from '..';

const Hero = () => {
  
  const filePath = '';

  return (
    <main className={`parent flex h-[750px]`}>
      <section className={`${styles.mainContainer} flex-1`}>
        <div className={``}>
          <ImageSlide />
        </div>
        <div className={`${styles.rightContainer}`}>
          <section className={styles.heroText}>
            <p>Rezarus is an online tank game inspired by a classic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis adipisci corporis autem quas pariatur! Non laudantium voluptatem quaerat natus ipsa maxime vero dolore minus dolores libero accusamus, molestias deleniti?</p>
          </section>
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