import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Home.module.scss';

type SocialProps = {
  platform: string;
};

export const Social: React.FC<SocialProps> = ({ platform }) => {
  let icon;
  let link;
  let alt;

  switch (platform) {
  case 'instagram':
    icon = 'instagram-line';
    link = 'https://www.instagram.com/eminnfidann';
    alt = 'Instagram';
    break;
  case 'twitter':
    icon = 'twitter-line';
    link = 'https://www.twitter.com/vuemin';
    alt = 'Twitter';
    break;
  case 'linkedin':
    icon = 'linkedin-box-line';
    link = 'https://www.linkedin.com/in/eminfidan';
    alt = 'LinkedIn';
    break;
  case 'github':
    icon = 'github-fill';
    link = 'https://www.github.com/eminfidan';
    alt = 'GitHub';
    break;
  case 'medium':
    icon = 'medium-line';
    link = 'https://eminfidan.medium.com';
    alt = 'Medium';
    break;
  case 'cv': 
    icon = 'file-text-line';
    link = 'Emin Fidan - CV.pdf';
    alt = 'CV';
    break;
  default:
    icon = '';
    link = '';
    alt = '';
    break;
  }

  return (
    <a className={styles.social} href={link} target="_blank" rel="noreferrer">
      <Image src={`/${icon}.svg`} alt={alt} width={24} height={24} />
    </a>
  );
};
