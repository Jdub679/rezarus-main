import styles from './hero.module.css';
import DownloadButton from '../Download/DownloadGame';

function Hero() {

  const filePath = '';

  return (
    <main className="parent ">
      <section className={`${styles.mainsection} flex flex-row w-full h-[700px]`}>
        <div className="image-slider border-2 w-1/2 h-full border-black">

        </div>
        <div className="right-container border-2 w-1/2 h-full border-black flex flex-col">
          <div className={`${styles.downloadsection} border-black border-2 h-1/2`}>
            <DownloadButton 
              filePath={filePath}
              className="button anchor text-[#235cbd]"
            />
          </div>
          <div className="border-2 border-black h-1/2"></div>
        </div>
      </section>
    </main>
  )
}

export default Hero