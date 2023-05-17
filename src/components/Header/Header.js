import React from "react";
import "./header.css";
import { Link} from "react-router-dom";
import  "react-router-dom";

export function Header() {
  return (
    <div className="header">
      <Link className="header__logoButton" to="/main">
        <span>
          <svg
            width="205"
            height="40"
            viewBox="0 0 205 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M59.5234 16.2383C61.1172 16.2383 62.4102 16.832 63.4023 18.0195C64.4023 19.207 64.9023 20.7617 64.9023 22.6836C64.9023 24.6055 64.4062 26.1641 63.4141 27.3594C62.4297 28.5469 61.1406 29.1406 59.5469 29.1406C58.5547 29.1406 57.6758 28.8945 56.9102 28.4023C56.1523 27.9023 55.5938 27.2344 55.2344 26.3984H55.1992V33.1367H53.6523V16.3789H55.1172V18.9922H55.1523C55.4883 18.1797 56.0547 17.5195 56.8516 17.0117C57.6484 16.4961 58.5391 16.2383 59.5234 16.2383ZM59.2539 27.7461C60.4727 27.7461 61.4531 27.2852 62.1953 26.3633C62.9453 25.4336 63.3203 24.2109 63.3203 22.6953C63.3203 21.1797 62.9453 19.957 62.1953 19.0273C61.4531 18.0898 60.4727 17.6211 59.2539 17.6211C58.0508 17.6211 57.0703 18.0938 56.3125 19.0391C55.5625 19.9766 55.1875 21.1914 55.1875 22.6836C55.1875 24.1836 55.5625 25.4023 56.3125 26.3398C57.0703 27.2773 58.0508 27.7461 59.2539 27.7461ZM72.1562 29.1406C70.4219 29.1406 69.0312 28.5586 67.9844 27.3945C66.9453 26.2227 66.4258 24.6523 66.4258 22.6836C66.4258 20.7227 66.9453 19.1602 67.9844 17.9961C69.0312 16.8242 70.4219 16.2383 72.1562 16.2383C73.8984 16.2383 75.2891 16.8242 76.3281 17.9961C77.375 19.1602 77.8984 20.7227 77.8984 22.6836C77.8984 24.6445 77.375 26.2109 76.3281 27.3828C75.2891 28.5547 73.8984 29.1406 72.1562 29.1406ZM72.1562 27.7461C73.4453 27.7461 74.4609 27.2969 75.2031 26.3984C75.9453 25.4922 76.3164 24.2539 76.3164 22.6836C76.3164 21.1133 75.9453 19.8789 75.2031 18.9805C74.4609 18.0742 73.4453 17.6211 72.1562 17.6211C70.875 17.6211 69.8633 18.0742 69.1211 18.9805C68.3789 19.8789 68.0078 21.1133 68.0078 22.6836C68.0078 24.2539 68.3789 25.4922 69.1211 26.3984C69.8633 27.2969 70.875 27.7461 72.1562 27.7461ZM80.0664 29V16.3789H81.5195V18.7344H81.5664C81.8398 17.9766 82.3008 17.3711 82.9492 16.918C83.5977 16.4648 84.3633 16.2383 85.2461 16.2383C86.1445 16.2383 86.9141 16.4766 87.5547 16.9531C88.2031 17.4297 88.6484 18.0742 88.8906 18.8867H88.9258C89.2305 18.0898 89.7383 17.4492 90.4492 16.9648C91.168 16.4805 91.9922 16.2383 92.9219 16.2383C94.1562 16.2383 95.1445 16.6211 95.8867 17.3867C96.6289 18.1445 97 19.1602 97 20.4336V29H95.4414V20.7852C95.4414 19.8008 95.1797 19.0273 94.6562 18.4648C94.1406 17.9023 93.4219 17.6211 92.5 17.6211C91.5625 17.6211 90.793 17.9492 90.1914 18.6055C89.5977 19.2539 89.3008 20.0898 89.3008 21.1133V29H87.7539V20.6328C87.7539 19.7344 87.4844 19.0078 86.9453 18.4531C86.4062 17.8984 85.7031 17.6211 84.8359 17.6211C83.8984 17.6211 83.125 17.9648 82.5156 18.6523C81.9141 19.3398 81.6133 20.2227 81.6133 21.3008V29H80.0664ZM104.828 29.1406C103.094 29.1406 101.703 28.5586 100.656 27.3945C99.6172 26.2227 99.0977 24.6523 99.0977 22.6836C99.0977 20.7227 99.6172 19.1602 100.656 17.9961C101.703 16.8242 103.094 16.2383 104.828 16.2383C106.57 16.2383 107.961 16.8242 109 17.9961C110.047 19.1602 110.57 20.7227 110.57 22.6836C110.57 24.6445 110.047 26.2109 109 27.3828C107.961 28.5547 106.57 29.1406 104.828 29.1406ZM104.828 27.7461C106.117 27.7461 107.133 27.2969 107.875 26.3984C108.617 25.4922 108.988 24.2539 108.988 22.6836C108.988 21.1133 108.617 19.8789 107.875 18.9805C107.133 18.0742 106.117 17.6211 104.828 17.6211C103.547 17.6211 102.535 18.0742 101.793 18.9805C101.051 19.8789 100.68 21.1133 100.68 22.6836C100.68 24.2539 101.051 25.4922 101.793 26.3984C102.535 27.2969 103.547 27.7461 104.828 27.7461ZM117.508 29.1406C115.922 29.1406 114.625 28.5469 113.617 27.3594C112.609 26.1641 112.105 24.6055 112.105 22.6836C112.105 20.7695 112.605 19.2188 113.605 18.0312C114.605 16.8359 115.895 16.2383 117.473 16.2383C118.473 16.2383 119.359 16.4883 120.133 16.9883C120.906 17.4805 121.465 18.1406 121.809 18.9688H121.844V11.3516H123.402V29H121.926V26.3164H121.891C121.523 27.1836 120.953 27.8711 120.18 28.3789C119.406 28.8867 118.516 29.1406 117.508 29.1406ZM120.707 19.0391C119.949 18.0938 118.965 17.6211 117.754 17.6211C116.543 17.6211 115.562 18.0859 114.812 19.0156C114.062 19.9453 113.688 21.168 113.688 22.6836C113.688 24.1992 114.062 25.4219 114.812 26.3516C115.562 27.2812 116.543 27.7461 117.754 27.7461C118.965 27.7461 119.949 27.2773 120.707 26.3398C121.473 25.4023 121.855 24.1836 121.855 22.6836C121.855 21.1914 121.473 19.9766 120.707 19.0391ZM131.406 29.1406C129.672 29.1406 128.281 28.5586 127.234 27.3945C126.195 26.2227 125.676 24.6523 125.676 22.6836C125.676 20.7227 126.195 19.1602 127.234 17.9961C128.281 16.8242 129.672 16.2383 131.406 16.2383C133.148 16.2383 134.539 16.8242 135.578 17.9961C136.625 19.1602 137.148 20.7227 137.148 22.6836C137.148 24.6445 136.625 26.2109 135.578 27.3828C134.539 28.5547 133.148 29.1406 131.406 29.1406ZM131.406 27.7461C132.695 27.7461 133.711 27.2969 134.453 26.3984C135.195 25.4922 135.566 24.2539 135.566 22.6836C135.566 21.1133 135.195 19.8789 134.453 18.9805C133.711 18.0742 132.695 17.6211 131.406 17.6211C130.125 17.6211 129.113 18.0742 128.371 18.9805C127.629 19.8789 127.258 21.1133 127.258 22.6836C127.258 24.2539 127.629 25.4922 128.371 26.3984C129.113 27.2969 130.125 27.7461 131.406 27.7461ZM139.316 29V16.3789H140.77V18.6172H140.816C141.035 17.8672 141.426 17.2852 141.988 16.8711C142.551 16.4492 143.227 16.2383 144.016 16.2383C144.352 16.2383 144.664 16.2812 144.953 16.3672V17.9141C144.688 17.7891 144.305 17.7266 143.805 17.7266C142.914 17.7266 142.199 18.0469 141.66 18.6875C141.129 19.3203 140.863 20.1484 140.863 21.1719V29H139.316ZM151.117 29.1406C149.383 29.1406 147.992 28.5586 146.945 27.3945C145.906 26.2227 145.387 24.6523 145.387 22.6836C145.387 20.7227 145.906 19.1602 146.945 17.9961C147.992 16.8242 149.383 16.2383 151.117 16.2383C152.859 16.2383 154.25 16.8242 155.289 17.9961C156.336 19.1602 156.859 20.7227 156.859 22.6836C156.859 24.6445 156.336 26.2109 155.289 27.3828C154.25 28.5547 152.859 29.1406 151.117 29.1406ZM151.117 27.7461C152.406 27.7461 153.422 27.2969 154.164 26.3984C154.906 25.4922 155.277 24.2539 155.277 22.6836C155.277 21.1133 154.906 19.8789 154.164 18.9805C153.422 18.0742 152.406 17.6211 151.117 17.6211C149.836 17.6211 148.824 18.0742 148.082 18.9805C147.34 19.8789 146.969 21.1133 146.969 22.6836C146.969 24.2539 147.34 25.4922 148.082 26.3984C148.824 27.2969 149.836 27.7461 151.117 27.7461ZM167.91 31.6016H156.953V30.4297H167.91V31.6016ZM174.648 29.1406C173.641 29.1406 172.75 28.8945 171.977 28.4023C171.211 27.9023 170.641 27.2109 170.266 26.3281H170.23V29H168.754V11.3516H170.301V18.9688H170.336C170.703 18.1172 171.27 17.4492 172.035 16.9648C172.801 16.4805 173.68 16.2383 174.672 16.2383C176.258 16.2383 177.543 16.832 178.527 18.0195C179.512 19.207 180.004 20.7617 180.004 22.6836C180.004 24.6133 179.508 26.1719 178.516 27.3594C177.531 28.5469 176.242 29.1406 174.648 29.1406ZM177.309 19.0156C176.574 18.0859 175.602 17.6211 174.391 17.6211C173.18 17.6211 172.191 18.0938 171.426 19.0391C170.668 19.9844 170.289 21.2031 170.289 22.6953C170.289 24.1875 170.668 25.4023 171.426 26.3398C172.191 27.2773 173.176 27.7461 174.379 27.7461C175.59 27.7461 176.566 27.2852 177.309 26.3633C178.051 25.4336 178.422 24.207 178.422 22.6836C178.422 21.168 178.051 19.9453 177.309 19.0156ZM187.258 29.1406C185.523 29.1406 184.133 28.5586 183.086 27.3945C182.047 26.2227 181.527 24.6523 181.527 22.6836C181.527 20.7227 182.047 19.1602 183.086 17.9961C184.133 16.8242 185.523 16.2383 187.258 16.2383C189 16.2383 190.391 16.8242 191.43 17.9961C192.477 19.1602 193 20.7227 193 22.6836C193 24.6445 192.477 26.2109 191.43 27.3828C190.391 28.5547 189 29.1406 187.258 29.1406ZM187.258 27.7461C188.547 27.7461 189.562 27.2969 190.305 26.3984C191.047 25.4922 191.418 24.2539 191.418 22.6836C191.418 21.1133 191.047 19.8789 190.305 18.9805C189.562 18.0742 188.547 17.6211 187.258 17.6211C185.977 17.6211 184.965 18.0742 184.223 18.9805C183.48 19.8789 183.109 21.1133 183.109 22.6836C183.109 24.2539 183.48 25.4922 184.223 26.3984C184.965 27.2969 185.977 27.7461 187.258 27.7461ZM199.188 23.7969H199.141L195.648 29H193.891L198.344 22.6484L193.938 16.3789H195.695L199.199 21.4648H199.234L202.703 16.3789H204.461L200.043 22.5898L204.426 29H202.668L199.188 23.7969Z"
              fill="#DC3E22"
            />
            <g>
              <path
                d="M38.9151 23.2834C38.9151 33.7058 30.466 40 20.0437 40C9.62098 40 1.17188 31.5509 1.17188 21.1282C1.17188 10.7059 9.88496 4.2981 20.3073 4.2981C30.73 4.2981 38.9151 12.8607 38.9151 23.2834Z"
                fill="#DC3E22"
              />
              <path
                d="M28.238 12.6065C27.3211 11.6729 25.8377 10.8048 24.733 10.551C25.3401 10.0127 25.4623 9.99491 26.2227 9.61813C28.1713 8.65362 31.0576 8.56482 31.0576 8.56482C31.0576 8.56482 27.6509 6.80417 25.1601 6.91465C24.5259 6.94254 23.8571 7.16655 23.2118 7.484C23.5757 6.97051 23.9205 6.45995 24.1409 6.0764C24.8152 4.90365 25.524 3.42624 25.524 3.42624C25.524 3.42624 22.9122 3.5657 21.7008 5.01562C21.2407 5.56642 20.8934 6.26622 20.6392 6.92272C20.1878 6.40416 19.6896 5.94239 19.1913 5.58192C16.6999 3.77893 12.7192 4.169 12.7192 4.169C12.7192 4.169 15.7263 5.87482 17.0793 7.57653C17.6076 8.24107 18.1437 8.54839 18.4642 9.29349C17.3564 9.05364 14.8569 9.13562 13.63 9.59054C10.4771 10.7599 9.11852 15.4649 9.11852 15.4649C9.11852 15.4649 12.1952 13.3442 16.3813 11.8565C17.3017 11.5295 18.2748 11.4428 19.1229 11.4577C18.7379 12.0575 18.3173 12.8363 17.999 13.7546C17.2247 15.9904 18.2479 21.3113 18.2479 21.3113C18.2479 21.3113 20.4896 18.1646 21.403 15.6156C21.8718 14.3073 21.9879 12.9936 21.9904 12.0242C22.8217 12.3931 23.8009 12.9319 24.5326 13.398C28.2794 15.7852 30.072 20.1435 30.072 20.1435C30.072 20.1435 30.5941 15.0059 28.238 12.6065Z"
                fill="#899441"
              />
              <path
                d="M20.5008 10.3094C20.4889 10.3094 20.477 10.3091 20.4651 10.3088C19.7242 10.2896 19.1391 9.67376 19.1572 8.9334C19.1587 8.86931 19.2234 4.36125 16.7191 2.40111C16.135 1.94395 16.0318 1.09984 16.489 0.515424C16.9465 -0.0686834 17.7906 -0.171833 18.3747 0.285626C21.9559 3.08806 21.8491 8.76128 21.843 9.00145C21.8238 9.73083 21.2262 10.3094 20.5008 10.3094Z"
                fill="#A8B64F"
              />
            </g>
            <defs>
              <clipPath id="clip0_12703_168">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
      </Link>
      <Link className="header__statistickButton" to="/statistics">
        <svg
          width="114"
          height="24"
          viewBox="0 0 114 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M34.8125 19.1875C33.2552 19.1875 32.0182 18.6641 31.1016 17.6172C30.1901 16.5651 29.7344 15.1458 29.7344 13.3594C29.7344 11.5885 30.1953 10.1771 31.1172 9.125C32.0391 8.06771 33.2708 7.53906 34.8125 7.53906C36.0104 7.53906 37.0312 7.86719 37.875 8.52344C38.724 9.17448 39.2526 10.0417 39.4609 11.125H38.0234C37.8203 10.4271 37.4271 9.8724 36.8438 9.46094C36.2604 9.04427 35.5833 8.83594 34.8125 8.83594C33.7135 8.83594 32.8333 9.2474 32.1719 10.0703C31.5104 10.8932 31.1797 11.9896 31.1797 13.3594C31.1797 14.7448 31.5078 15.8464 32.1641 16.6641C32.8203 17.4818 33.7057 17.8906 34.8203 17.8906C35.6172 17.8906 36.2943 17.7135 36.8516 17.3594C37.4089 17.0052 37.7995 16.5052 38.0234 15.8594H39.4609C39.1849 16.9323 38.6458 17.7552 37.8438 18.3281C37.0417 18.901 36.0312 19.1875 34.8125 19.1875ZM47.2344 10.5781V11.7031H44.5V19H43.1562V11.7031H40.4219V10.5781H47.2344ZM51.0625 17.8984C51.75 17.8984 52.3177 17.7005 52.7656 17.3047C53.2188 16.9036 53.4453 16.401 53.4453 15.7969V15.1172L51.2422 15.2578C49.9609 15.3359 49.3203 15.7865 49.3203 16.6094C49.3203 17 49.4766 17.3125 49.7891 17.5469C50.1068 17.7812 50.5312 17.8984 51.0625 17.8984ZM50.7734 19.0781C49.9193 19.0781 49.2318 18.8516 48.7109 18.3984C48.1901 17.9453 47.9297 17.3464 47.9297 16.6016C47.9297 15.8776 48.2005 15.3099 48.7422 14.8984C49.2839 14.4818 50.0651 14.2422 51.0859 14.1797L53.4453 14.0391V13.3359C53.4453 12.8151 53.2786 12.4141 52.9453 12.1328C52.612 11.8516 52.1354 11.7109 51.5156 11.7109C51.026 11.7109 50.612 11.8281 50.2734 12.0625C49.9401 12.2969 49.7318 12.612 49.6484 13.0078H48.3438C48.3646 12.2995 48.6797 11.7057 49.2891 11.2266C49.8984 10.7422 50.6458 10.5 51.5312 10.5C52.526 10.5 53.3203 10.7474 53.9141 11.2422C54.5078 11.7318 54.8047 12.3906 54.8047 13.2188V19H53.5156V17.5391H53.4844C53.2448 18.0078 52.8802 18.3828 52.3906 18.6641C51.901 18.9401 51.362 19.0781 50.7734 19.0781ZM62.6875 10.5781V11.7031H59.9531V19H58.6094V11.7031H55.875V10.5781H62.6875ZM65.3438 19H64V10.5781H65.3438V16.8984H65.4062L69.7422 10.5781H71.0859V19H69.7422V12.6797H69.6797L65.3438 19ZM80.0312 13.1562H78.6797C78.5599 12.724 78.3151 12.375 77.9453 12.1094C77.5755 11.8438 77.1042 11.7109 76.5312 11.7109C75.7917 11.7109 75.1953 11.9922 74.7422 12.5547C74.2891 13.1172 74.0625 13.862 74.0625 14.7891C74.0625 15.737 74.2891 16.487 74.7422 17.0391C75.2005 17.5911 75.8021 17.8672 76.5469 17.8672C77.1042 17.8672 77.5677 17.7448 77.9375 17.5C78.3073 17.2552 78.5599 16.9036 78.6953 16.4453H80.0469C79.9062 17.2318 79.5182 17.8672 78.8828 18.3516C78.2474 18.8359 77.4661 19.0781 76.5391 19.0781C75.3724 19.0781 74.4375 18.6927 73.7344 17.9219C73.0312 17.1458 72.6797 16.1016 72.6797 14.7891C72.6797 13.4974 73.0312 12.4609 73.7344 11.6797C74.4375 10.8932 75.3672 10.5 76.5234 10.5C77.4818 10.5 78.2734 10.7552 78.8984 11.2656C79.5234 11.776 79.901 12.4062 80.0312 13.1562ZM87.4844 10.5781V11.7031H84.75V19H83.4062V11.7031H80.6719V10.5781H87.4844ZM90.1406 19H88.7969V10.5781H90.1406V16.8984H90.2031L94.5391 10.5781H95.8828V19H94.5391V12.6797H94.4766L90.1406 19ZM100.664 14.5703L104.734 19H102.977L99.2969 14.9297H99.2344V19H97.8906V10.5781H99.2344V14.3203H99.2969L102.938 10.5781H104.625L100.664 14.5703ZM108.453 17.8984C109.141 17.8984 109.708 17.7005 110.156 17.3047C110.609 16.9036 110.836 16.401 110.836 15.7969V15.1172L108.633 15.2578C107.352 15.3359 106.711 15.7865 106.711 16.6094C106.711 17 106.867 17.3125 107.18 17.5469C107.497 17.7812 107.922 17.8984 108.453 17.8984ZM108.164 19.0781C107.31 19.0781 106.622 18.8516 106.102 18.3984C105.581 17.9453 105.32 17.3464 105.32 16.6016C105.32 15.8776 105.591 15.3099 106.133 14.8984C106.674 14.4818 107.456 14.2422 108.477 14.1797L110.836 14.0391V13.3359C110.836 12.8151 110.669 12.4141 110.336 12.1328C110.003 11.8516 109.526 11.7109 108.906 11.7109C108.417 11.7109 108.003 11.8281 107.664 12.0625C107.331 12.2969 107.122 12.612 107.039 13.0078H105.734C105.755 12.2995 106.07 11.7057 106.68 11.2266C107.289 10.7422 108.036 10.5 108.922 10.5C109.917 10.5 110.711 10.7474 111.305 11.2422C111.898 11.7318 112.195 12.3906 112.195 13.2188V19H110.906V17.5391H110.875C110.635 18.0078 110.271 18.3828 109.781 18.6641C109.292 18.9401 108.753 19.0781 108.164 19.0781Z"
            fill="#DC3E22"
          />
          <g>
            <path
              d="M10 20H14V4H10V20ZM4 20H8V12H4V20ZM16 9V20H20V9H16Z"
              fill="#DC3E22"
            />
          </g>
        </svg>
      </Link>
    </div>
  );
}