import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.scss';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Emin Fidan</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={(inter.className, styles.main)}>
        <div className="flex flex-col lg:flex-row justify-center mx-auto min-vh-100">
          <div className="flex flex-col text-end mr-5">
            <Image
              src="/emin.jpg"
              alt="Emin Fidan"
              className={styles.blob}
              width={320}
              height={320}
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="m-auto">
              <h3 className="font-bold text-20 leading-24">Hi!</h3>
              <h1 className="flex font-bold text-16 leading-20 my-4">
                I&apos;m
                <span className="text-primary ml-2 text-20 leading-20">
                  Emin Fidan
                </span>
              </h1>
              <p className="max-w-[34.375rem] text-16 leading-20">
                Im a software developer with experience in developing front-end
                systems, trying to improve and keep up to date in the software
                field.
              </p>
              <div className="flex flex-wrap mt-4">
                <div className="flex flex-col mr-5">
                  <span className="my-2 text-16 leading-20">FIND WITH ME</span>
                  <div className="flex">
                    <a
                      className={styles.social}
                      href="https://www.instagram.com/eminnfidann"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src="/instagram-line.svg"
                        alt="Instagram"
                        width={24}
                        height={24}
                      />
                    </a>
                    <a
                      className={styles.social}
                      href="https://www.twitter.com/vuemin"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src="/twitter-line.svg"
                        alt="Twitter"
                        width={24}
                        height={24}
                      />
                    </a>
                    <a
                      className={styles.social}
                      href="https://www.linkedin.com/in/eminfidan"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src="/linkedin-box-line.svg"
                        alt="LinkedIn"
                        width={24}
                        height={24}
                      />
                    </a>
                    <a
                      className={styles.social}
                      href="https://github.com/eminfidan"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src="/github-fill.svg"
                        alt="Github"
                        width={24}
                        height={24}
                      />
                    </a>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="my-2 text-16 leading-20">BLOG</span>
                  <div className="flex">
                    <a
                      className={styles.social}
                      href="https://eminfidan.medium.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src="/medium-line.svg"
                        alt="Medium"
                        width={24}
                        height={24}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="absolute bottom-10 right-10">
        <button className="btn shadow-md p-3 rounded hover:text-primary hover:transition-colors hover:duration-300">
          <a href="cv.pdf" target="_blank" rel="noreferrer" className="p-3">
            Download CV
          </a>
        </button>
      </div>
    </>
  );
}
