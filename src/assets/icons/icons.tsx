/* eslint-disable jsx-a11y/no-static-element-interactions */
import datatIcon from './data.png';
import devices from './devices.png';
import phoneIcon from './phone-user.png';
import folders from './folders.png';
import gearWheel from './gearWheel.png';
import info from './info.png';
import laungage from './laungage.png';
import lock from './lock.png';
import nameUser from './name-user.png';
import notice from './notice.png';

export function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="50px"
      height="50px"
      fill="#6f6f6f"
      id="search-svg"
    >
      <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
    </svg>
  );
}

export function SettingsIcon() {
  return (
    <svg
      className="popup-svg"
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="48.000000pt"
      height="48.000000pt"
      viewBox="0 0 48.000000 48.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        className="popup-svg-color"
        transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)"
        stroke="none"
      >
        <path
          d="M187 419 c-5 -17 -11 -20 -34 -15 -40 9 -87 -39 -77 -78 5 -22 3 -28
-15 -33 -18 -4 -21 -13 -21 -53 0 -40 3 -49 21 -53 18 -5 20 -11 15 -33 -10
-39 37 -87 77 -78 23 5 29 2 34 -15 4 -18 13 -21 53 -21 40 0 49 3 53 21 5 17
11 20 34 15 40 -9 87 39 78 77 -5 20 -2 29 14 39 30 19 30 93 0 101 -18 5 -20
11 -15 33 10 39 -37 87 -77 78 -23 -5 -29 -2 -34 15 -4 18 -13 21 -53 21 -40
0 -49 -3 -53 -21z m83 -28 c7 -14 23 -21 53 -23 42 -3 42 -3 45 -45 2 -30 9
-46 23 -53 10 -6 19 -19 19 -30 0 -11 -9 -24 -19 -30 -14 -7 -21 -23 -23 -53
-3 -42 -3 -42 -45 -45 -30 -2 -46 -9 -53 -23 -14 -25 -46 -25 -60 0 -7 14 -23
21 -53 23 -42 3 -42 3 -45 45 -2 30 -9 46 -23 53 -25 14 -25 46 0 60 14 7 21
23 23 53 3 42 3 42 45 45 30 2 46 9 53 23 6 10 19 19 30 19 11 0 24 -9 30 -19z"
        />
        <path
          d="M195 351 c-45 -20 -70 -60 -70 -112 0 -42 5 -53 33 -81 47 -48 117
-48 164 0 28 28 33 39 33 82 0 42 -5 54 -31 81 -33 33 -92 46 -129 30z m17
-70 c-5 -3 -15 -19 -23 -35 -20 -42 -39 -45 -39 -6 0 22 9 41 32 63 l33 32 3
-24 c2 -13 0 -26 -6 -30z m102 7 c19 -27 22 -81 4 -76 -7 3 -19 18 -27 34 -8
16 -18 31 -23 32 -4 2 -8 15 -8 28 0 21 3 23 19 14 11 -5 27 -20 35 -32z m-58
-39 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z m41 -62
c12 -12 -26 -37 -57 -37 -31 0 -66 23 -57 37 7 12 102 11 114 0z"
        />
      </g>
    </svg>
  );
}

export function EmojiIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24px" height="24px" fill="#6f6f6f" id="emoji-svg" className="message-input__icon">
      <path
        d="M256 352C293.2 352 319.2 334.5 334.4 318.1C343.3 308.4 358.5 307.7 368.3 316.7C378 325.7 378.6 340.9 369.6 350.6C347.7 374.5 309.7 400 256 400C202.3 400 164.3 374.5 142.4 350.6C133.4 340.9 133.1 325.7 143.7 316.7C153.5 307.7 168.7 308.4 177.6 318.1C192.8 334.5 218.8 352 256 352zM208.4 208C208.4 225.7 194 240 176.4 240C158.7 240 144.4 225.7 144.4 208C144.4 190.3 158.7 176 176.4 176C194 176 208.4 190.3 208.4 208zM304.4 208C304.4 190.3 318.7 176 336.4 176C354 176 368.4 190.3 368.4 208C368.4 225.7 354 240 336.4 240C318.7 240 304.4 225.7 304.4 208zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
      />
    </svg>
  );
}

export function AttachIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24px" height="24px" fill="#6f6f6f" id="attach-svg" className="message-input__icon">
      <path
        d="M396.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z"
      />
    </svg>
  );
}

export function SendMessageIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24px" height="24px" fill="#ffff" id="attach-svg" className="message-input__send-icon">
      <path
        d="M236.4,201.5,141.8,32.6a16,16,0,0,0-27.9,0L19.3,201.5a15.7,15.7,0,0,0,1.8,18.1,15.9,15.9,0,0,0,17.6,4.8l78.5-28.1a4.1,4.1,0,0,0,2.7-3.8V120.3a8.2,8.2,0,0,1,7.4-8.3,8,8,0,0,1,8.6,8v72.5a4,4,0,0,0,2.6,3.8l78.6,28.1a17,17,0,0,0,5.4.9,16,16,0,0,0,13.9-23.8Z"
      />
    </svg>
  );
}

export function AudioMessageIcon() {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="484.5px"
      height="484.5px"
      viewBox="0 0 484.5 484.5"
      xmlSpace="preserve"
      className="message-input__audio-icon"
    >
      <g>
        <g id="mic">
          <path d="M242.25,306c43.35,0,76.5-33.15,76.5-76.5v-153c0-43.35-33.15-76.5-76.5-76.5c-43.35,0-76.5,33.15-76.5,76.5v153
C165.75,272.85,198.9,306,242.25,306z M377.4,229.5c0,76.5-63.75,130.05-135.15,130.05c-71.4,0-135.15-53.55-135.15-130.05H63.75
c0,86.7,68.85,158.1,153,170.85v84.15h51v-84.15c84.15-12.75,153-84.149,153-170.85H377.4L377.4,229.5z"
          />
        </g>
      </g>
    </svg>
  );
}

export function CreateNewChatIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
      fill="#ffff"
      id="button-svg"
    >
      <path
        d="M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z"
      />
    </svg>
  );
}
export function EditIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
      fill="grey"
      className="icon"
    >
      <path
        d="M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z"
      />
    </svg>
  );
}

export function ArrowLeftIcon() {
  return (
    <svg width="9" height="9" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg" className="icon arrow-icon">
      <path d="M3.4 8.13377H4.324L1.42 4.80977L8.608 4.78577V4.08977H1.42L4.324 0.753771H3.4L0.112 4.44977L3.4 8.13377Z" />
    </svg>
  );
}

export function LogOutIcon() {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="48.000000pt"
      height="48.000000pt"
      viewBox="0 0 48.000000 48.000000"
      preserveAspectRatio="xMidYMid meet"
      className="logOut-icon icon"
    >
      <g transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)" fill="grey" stroke="none">
        <path d="M80 400 c-18 -18 -20 -33 -20 -160 0 -182 -1 -180 143 -180 105 0
147 13 147 45 0 23 -20 28 -39 11 -15 -14 -37 -16 -112 -14 l-94 3 0 135 0
135 94 3 c75 2 97 0 112 -14 19 -17 39 -12 39 11 0 32 -42 45 -147 45 -90 0
-106 -3 -123 -20z"
        />
        <path d="M325 309 c-4 -5 1 -19 10 -29 17 -19 15 -19 -81 -22 -80 -2 -99 -6
-99 -18 0 -12 19 -16 99 -18 97 -3 98 -3 80 -23 -13 -15 -15 -22 -6 -31 10
-10 22 -3 54 30 l42 42 -39 40 c-41 42 -50 46 -60 29z"
        />
      </g>
    </svg>
  );
}

export function PhoneIcon() {
  return (
    <div>
      <img className="icon" src={phoneIcon} alt="" />
    </div>
  );
}

export function DatatIcon() {
  return (
    <div>
      <img className="icon" src={datatIcon} alt="" />
    </div>
  );
}

export function DevicesIcon() {
  return (
    <div>
      <img className="icon" src={devices} alt="" />
    </div>
  );
}

export function FoldersIcon() {
  return (
    <div>
      <img className="icon" src={folders} alt="" />
    </div>
  );
}

export function GearWheelIcon() {
  return (
    <div>
      <img className="icon" src={gearWheel} alt="" />
    </div>
  );
}

export function InfoIcon() {
  return (
    <div>
      <img className="icon" src={info} alt="" />
    </div>
  );
}

export function LaungageIcon() {
  return (
    <div>
      <img className="icon" src={laungage} alt="" />
    </div>
  );
}

export function LockIcon() {
  return (
    <div>
      <img className="icon" src={lock} alt="" />
    </div>
  );
}

export function NameUserIcon() {
  return (
    <div>
      <img className="icon" src={nameUser} alt="" />
    </div>
  );
}

export function NoticeIcon() {
  return (
    <div>
      <img className="icon" src={notice} alt="" />
    </div>
  );
}
export function AddPhotoIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon" fill="white">
      <path
        d="M20,10.5a1,1,0,0,0-1,1v7a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1v-8a1,1,0,0,1,1-1H6a1,1,0,0,0,1-.68l.54-1.64a1,1,0,0,1,.95-.68H14a1,1,0,0,0,0-2H8.44A3,3,0,0,0,5.6,6.55l-.32,1H4a3,3,0,0,0-3,3v8a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3v-7A1,1,0,0,0,20,10.5Zm-9-1a4,4,0,1,0,4,4A4,4,0,0,0,11,9.5Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,11,15.5Zm11-11H21v-1a1,1,0,0,0-2,0v1H18a1,1,0,0,0,0,2h1v1a1,1,0,0,0,2,0v-1h1a1,1,0,0,0,0-2Z"
      />
    </svg>
  );
}

export function CloseIcon(props: {callback: () => void }) {
  const { callback } = props;
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div className="close-popup-icon" onClick={() => callback()}>
      <svg
        className="icon close"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M602.512147 511.99738l402.747939-402.747939a63.999673 63.999673 0 0 0-90.509537-90.509537L512.00261 421.487843 109.254671 18.749904a63.999673 63.999673 0 0 0-90.509537 90.509537L421.493073 511.99738 18.755134 914.745319a63.999673 63.999673 0 0 0 90.509537 90.509537L512.00261 602.506917l402.747939 402.747939a63.999673 63.999673 0 0 0 90.509537-90.509537z"
        />
      </svg>
    </div>
  );
}

export function MoreIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" className="icon more">
      <path
        d="M64 360c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zm0-160c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zM120 96c0 30.9-25.1 56-56 56S8 126.9 8 96S33.1 40 64 40s56 25.1 56 56z"
      />
    </svg>
  );
}

export function MuteIcon() {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="512.000000pt"
      height="512.000000pt"
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet"
      className="popup-svg muted-bell-popup"
    >
      <metadata>
        Created by potrace 1.16, written by Peter Selinger 2001-2019
      </metadata>
      <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
        <path d="M2453 4991 c-89 -32 -156 -98 -192 -188 -11 -27 -21 -33 -64 -44
-310 -73 -613 -254 -831 -499 -32 -36 -65 -75 -74 -88 -15 -23 -17 -22 -271
231 -141 140 -270 262 -288 271 -45 22 -135 21 -182 -3 -71 -37 -121 -115
-121 -190 0 -79 12 -95 330 -416 l307 -310 -25 -70 c-13 -38 -36 -122 -50
-185 -25 -113 -25 -124 -31 -670 -7 -634 1 -583 -103 -672 -254 -217 -361
-379 -410 -618 -16 -79 -19 -127 -16 -286 l3 -190 37 -75 c46 -93 112 -158
206 -202 l67 -32 494 -5 493 -5 23 -60 c114 -304 352 -506 660 -560 102 -18
175 -19 265 -5 317 50 563 250 681 553 l28 72 338 3 338 2 250 -249 c137 -137
264 -256 280 -264 89 -44 189 -25 253 48 55 63 70 124 47 201 -15 52 -29 70
-175 218 l-158 161 29 35 c17 19 44 64 62 100 l32 65 -1 225 c0 259 -11 316
-88 475 -70 143 -144 231 -334 393 -104 89 -96 37 -103 677 -5 528 -6 566 -28
668 -125 606 -564 1082 -1141 1236 -119 32 -115 29 -152 101 -72 140 -236 204
-385 151z m244 -631 c362 -46 672 -245 864 -554 60 -98 103 -200 137 -325 l26
-96 6 -575 c6 -496 9 -583 23 -633 43 -148 117 -254 257 -367 195 -158 248
-260 258 -496 3 -99 2 -133 -8 -139 -8 -5 -450 430 -1348 1328 l-1336 1336 58
75 c245 321 663 496 1063 446z m-439 -3188 c-761 -1 -1389 0 -1397 3 -11 4
-13 30 -9 138 10 230 62 333 251 490 126 105 192 186 234 289 48 119 52 174
53 713 0 275 3 524 7 553 l6 54 1119 -1119 1118 -1118 -1382 -3z"
        />
      </g>
    </svg>
  );
}

export function PhoneIconTopPanel() {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="1000px"
      height="1000px"
      viewBox="0 0 900 900"
      preserveAspectRatio="xMidYMid meet"
      className="popup-svg phone-popup"
    >
      <metadata>
        Created by potrace 1.16, written by Peter Selinger 2001-2019
      </metadata>
      <g transform="translate(-150,900) scale(0.100000,-0.100000)" stroke="none" className="phone-popup">
        <path d="M3405 7380 c-143 -9 -216 -29 -297 -81 -103 -67 -188 -195 -225 -344
-13 -53 -17 -108 -16 -225 1 -142 4 -169 38 -315 112 -483 281 -977 480 -1408
90 -193 113 -232 239 -400 242 -322 500 -592 801 -836 641 -520 1303 -807
2065 -895 178 -21 416 -21 495 -1 157 41 287 144 349 276 51 108 61 195 60
514 -1 225 -4 280 -18 330 -37 127 -109 228 -205 293 -70 47 -287 134 -541
217 -156 52 -186 59 -279 63 -207 9 -414 -50 -606 -173 -27 -17 -117 -90 -199
-161 -236 -204 -294 -252 -400 -330 l-99 -74 -81 57 c-398 278 -737 600 -1005
951 l-63 83 70 92 c87 115 162 205 325 387 137 153 186 219 234 315 105 208
132 491 68 695 -45 142 -214 590 -256 677 -69 146 -197 245 -354 278 -88 18
-409 26 -580 15z m539 -440 c37 -33 46 -56 204 -495 74 -206 75 -212 75 -305
-1 -115 -33 -226 -91 -316 -22 -32 -103 -131 -182 -219 -79 -88 -166 -188
-194 -223 l-50 -63 -19 38 c-29 55 -159 381 -205 513 -70 197 -131 397 -184
600 -46 180 -50 201 -46 285 5 105 30 164 81 195 30 19 52 20 304 20 l272 0
35 -30z m2502 -2819 c149 -45 291 -94 411 -140 131 -51 127 -40 131 -367 3
-266 3 -271 -19 -298 -12 -16 -37 -35 -55 -42 -90 -38 -518 5 -827 82 -200 51
-487 152 -620 221 l-27 14 177 152 c314 269 364 308 449 349 67 32 169 61 239
67 6 1 69 -17 141 -38z"
        />
      </g>
    </svg>
  );
}

export function TrashIcon() {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="48.000000pt"
      height="48.000000pt"
      viewBox="0 0 48.000000 48.000000"
      preserveAspectRatio="xMidYMid meet"
      className="popup-svg trash-popup"
    >

      <g transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)" stroke="none">
        <path d="M175 410 c-3 -5 -22 -10 -41 -10 -27 0 -34 -4 -34 -20 0 -19 7 -20
140 -20 133 0 140 1 140 20 0 16 -7 20 -34 20 -19 0 -38 5 -41 10 -3 6 -33 10
-65 10 -32 0 -62 -4 -65 -10z"
        />
        <path d="M122 203 l3 -138 115 0 115 0 3 138 3 137 -121 0 -121 0 3 -137z
m198 -3 l0 -100 -80 0 -80 0 0 100 0 100 80 0 80 0 0 -100z"
        />
      </g>
    </svg>
  );
}

export function SearchIconTopPanel() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px" className="popup-svg search-popup">
      <path
        d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"
      />
    </svg>
  );
}
export function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48px" height="48px">
      <path d="M12 2A10 10 0 1 0 12 22A10 10 0 1 0 12 2Z" opacity=".3" fill="transparent" className="github-icon" />
      <path
        fill="white"
        d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"
      />
    </svg>
  );
}
export function RsschoolIcon() {
  return (
    <svg
      width="553"
      height="206"
      viewBox="0 0 553 206"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="links__rsschool"
    >
      <g clipPath="url(#clip0_27_76)">
        <path
          className="links__rsschool__path"
          d="M285.4 68L311.7 66.3C312.3 70.6 313.4 73.8 315.2 76.1C318.1 79.7 322.1 81.5 327.4 81.5C331.3 81.5 334.4 80.6 336.5 78.7C338.5 77.2 339.7 74.8 339.7 72.3C339.7 69.9 338.6 67.6 336.7 66.1C334.7 64.3 330 62.5 322.6 60.9C310.5 58.2 301.8 54.6 296.7 50C291.6 45.7 288.7 39.4 288.9 32.7C288.9 28.1 290.3 23.5 292.9 19.7C295.9 15.4 300 12 304.9 10.1C310.2 7.80001 317.6 6.60001 326.9 6.60001C338.3 6.60001 347 8.70001 353 13C359 17.2 362.6 24 363.7 33.3L337.7 34.8C337 30.8 335.6 27.9 333.3 26C331 24.1 328 23.2 324.1 23.2C320.9 23.2 318.5 23.9 316.9 25.2C315.4 26.4 314.4 28.2 314.5 30.2C314.5 31.7 315.3 33.1 316.5 34C317.8 35.2 320.9 36.3 325.8 37.3C337.9 39.9 346.5 42.5 351.8 45.2C357.1 47.9 360.9 51.2 363.2 55.1C365.6 59.1 366.8 63.7 366.7 68.4C366.7 74 365.1 79.6 361.9 84.3C358.6 89.2 354 93 348.6 95.3C342.9 97.8 335.7 99.1 327.1 99.1C311.9 99.1 301.4 96.2 295.5 90.3C289.6 84.4 286.1 77 285.4 68ZM6.3 97.6V8.20001H52.4C60.9 8.20001 67.5 8.90001 72 10.4C76.4 11.8 80.3 14.7 82.9 18.6C85.8 22.9 87.2 27.9 87.1 33.1C87.4 41.9 82.9 50.3 75.2 54.7C72.2 56.4 68.9 57.6 65.5 58.2C68 58.9 70.5 60.1 72.7 61.5C74.4 62.9 75.8 64.5 77.1 66.2C78.6 67.9 79.9 69.8 81 71.8L94.4 97.7H63L48.2 70.2C46.3 66.7 44.7 64.4 43.2 63.3C41.2 61.9 38.8 61.2 36.4 61.2H34V97.5H6.3V97.6ZM34 44.4H45.7C48.2 44.2 50.6 43.8 53 43.2C54.8 42.9 56.4 41.9 57.5 40.4C60.2 36.8 59.8 31.7 56.5 28.6C54.7 27.1 51.2 26.3 46.2 26.3H34V44.4ZM0 174.2L26.3 172.5C26.9 176.8 28 180 29.8 182.3C32.6 185.9 36.7 187.8 42 187.8C45.9 187.8 49 186.9 51.1 185C53.1 183.4 54.3 181.1 54.3 178.6C54.3 176.2 53.2 173.9 51.3 172.4C49.3 170.6 44.6 168.8 37.1 167.2C25 164.5 16.3 160.9 11.2 156.3C6.1 152 3.2 145.7 3.4 139C3.4 134.4 4.8 129.8 7.4 126C10.4 121.7 14.5 118.3 19.4 116.4C24.7 114.1 32.1 112.9 41.4 112.9C52.8 112.9 61.5 115 67.5 119.3C73.5 123.6 77 130.3 78.1 139.6L52.1 141.1C51.4 137.1 50 134.2 47.7 132.3C45.5 130.4 42.4 129.5 38.5 129.6C35.3 129.6 32.9 130.3 31.3 131.7C29.7 132.9 28.8 134.7 28.9 136.7C28.9 138.2 29.7 139.6 30.9 140.5C32.2 141.7 35.3 142.8 40.2 143.8C52.3 146.4 60.9 149 66.2 151.7C71.5 154.4 75.3 157.7 77.6 161.6C80 165.6 81.2 170.2 81.2 174.8C81.2 180.4 79.5 185.9 76.4 190.6C73.1 195.5 68.5 199.3 63.1 201.6C57.4 204.1 50.2 205.4 41.6 205.4C26.4 205.4 15.9 202.5 10 196.6C4.1 190.6 0.8 183.2 0 174.2H0Z"
          fill="white"
        />
        <path
          className="links__rsschool__path"
          d="M133 167.2L157.2 174.5C155.9 180.6 153.2 186.4 149.5 191.5C146.1 196 141.6 199.5 136.5 201.8C131.3 204.1 124.7 205.3 116.7 205.3C107 205.3 99 203.9 92.9 201.1C86.7 198.3 81.4 193.3 76.9 186.2C72.4 179.1 70.2 170 70.2 158.9C70.2 144.1 74.1 132.7 82 124.8C89.9 116.9 101 112.9 115.4 112.9C126.7 112.9 135.5 115.2 142 119.7C148.4 124.3 153.2 131.3 156.4 140.7L132 146.1C131.4 144 130.5 141.9 129.3 140.1C127.8 138 125.9 136.4 123.6 135.2C121.3 134 118.7 133.5 116.1 133.5C109.8 133.5 105 136 101.7 141.1C99.2 144.8 97.9 150.7 97.9 158.7C97.9 168.6 99.4 175.4 102.4 179.1C105.4 182.8 109.6 184.6 115.1 184.6C120.4 184.6 124.4 183.1 127.1 180.2C129.8 177.1 131.8 172.8 133 167.2ZM189.5 114.4H217.1V145.7H247.3V114.4H275.1V203.8H247.3V167.6H217.1V203.8H189.5V114.4V114.4Z"
          fill="white"
        />
        <path
          className="links__rsschool__path"
          d="M271.3 159.1C271.3 144.5 275.4 133.1 283.5 125C291.6 116.9 303 112.8 317.5 112.8C332.4 112.8 343.8 116.8 351.9 124.8C360 132.8 364 144 364 158.4C364 168.9 362.2 177.4 358.7 184.1C355.3 190.7 350 196.1 343.5 199.7C336.8 203.4 328.5 205.3 318.6 205.3C308.5 205.3 300.2 203.7 293.6 200.5C286.8 197.1 281.2 191.8 277.5 185.3C273.4 178.3 271.3 169.6 271.3 159.1ZM298.9 159.2C298.9 168.2 300.6 174.7 303.9 178.7C307.2 182.6 311.8 184.6 317.6 184.6C323.5 184.6 328.1 182.7 331.4 178.8C334.7 174.9 336.3 168 336.3 158C336.3 149.6 334.6 143.4 331.2 139.6C327.8 135.7 323.2 133.8 317.4 133.8C312.3 133.6 307.4 135.8 304 139.7C300.6 143.6 298.9 150.1 298.9 159.2V159.2ZM392.3 159.1C392.3 144.5 396.4 133.1 404.5 125C412.6 116.9 424 112.8 438.5 112.8C453.4 112.8 464.9 116.8 472.9 124.8C480.9 132.8 485 144 485 158.4C485 168.9 483.2 177.4 479.7 184.1C476.3 190.7 471 196.1 464.5 199.7C457.8 203.4 449.5 205.3 439.6 205.3C429.5 205.3 421.2 203.7 414.6 200.5C407.8 197.1 402.2 191.8 398.5 185.3C394.4 178.3 392.3 169.6 392.3 159.1V159.1ZM419.9 159.2C419.9 168.2 421.6 174.7 424.9 178.7C428.2 182.6 432.8 184.6 438.6 184.6C444.5 184.6 449.1 182.7 452.4 178.8C455.7 174.9 457.3 168 457.3 158C457.3 149.6 455.6 143.4 452.2 139.6C448.8 135.7 444.2 133.8 438.4 133.8C433.3 133.6 428.3 135.8 425 139.7C421.6 143.6 419.9 150.1 419.9 159.2V159.2Z"
          fill="white"
        />
        <path d="M482.1 114.4H509.7V181.8H552.8V203.8H482V114.4H482.1Z" fill="white" className="links__rsschool__path" />
        <path
          d="M451.679 109.241C479.466 88.3007 488.035 52.804 470.817 29.9567C453.6 7.10932 417.117 5.56311 389.329 26.5031C361.542 47.4431 352.973 82.9398 370.191 105.787C387.408 128.634 423.891 130.181 451.679 109.241Z"
          stroke="white"
          strokeWidth="4"
          strokeMiterlimit="10"
        />
        <path
          d="M392.4 61.3L402.4 54.3L414.7 71.8C416.8 74.6 418.4 77.6 419.6 80.9C420.3 83.4 420.1 86.1 419.1 88.5C417.8 91.5 415.7 94 412.9 95.8C409.6 98.1 406.8 99.4 404.4 99.8C402.1 100.2 399.7 99.8 397.5 98.8C395.1 97.6 393 95.9 391.4 93.7L400 85.7C400.7 86.8 401.6 87.8 402.6 88.6C403.3 89.1 404.1 89.4 405 89.4C405.7 89.4 406.4 89.1 406.9 88.7C407.9 88.1 408.6 86.9 408.5 85.7C408.2 84 407.5 82.3 406.4 81L392.4 61.3V61.3ZM422.4 72.4L431.5 65.2C432.5 66.4 433.8 67.3 435.2 67.8C437.2 68.4 439.3 68 441 66.7C442.2 65.9 443.2 64.8 443.6 63.4C444.2 61.6 443.2 59.6 441.4 59C441.1 58.9 440.8 58.8 440.5 58.8C439.3 58.7 437.2 59.2 434.1 60.5C429 62.6 425 63.4 422 63.1C419.1 62.8 416.4 61.3 414.8 58.8C413.6 57.1 413 55.1 412.9 53.1C412.9 50.8 413.5 48.5 414.8 46.6C416.7 43.9 419 41.6 421.8 39.8C426 36.9 429.7 35.5 432.9 35.5C436.1 35.5 439.1 37 441.9 40.1L432.9 47.2C431.1 44.9 427.7 44.4 425.4 46.2L425.1 46.5C424.1 47.1 423.4 48 423 49.1C422.7 49.9 422.9 50.8 423.4 51.5C423.8 52 424.4 52.4 425.1 52.4C425.9 52.5 427.3 52.1 429.3 51.2C434.3 49.1 438.1 47.9 440.7 47.5C442.9 47.1 445.2 47.3 447.3 48.2C449.2 49 450.8 50.4 451.9 52.1C453.3 54.1 454.1 56.5 454.2 59C454.3 61.6 453.6 64.1 452.2 66.3C450.4 69 448.1 71.3 445.4 73.1C439.9 76.9 435.4 78.5 431.8 77.9C427.9 77.3 424.7 75.3 422.4 72.4V72.4Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_27_76">
          <rect width="552.8" height="205.3" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function DarkModeIcon() {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="50.000000pt"
      height="50.000000pt"
      viewBox="0 0 50.000000 50.000000"
      preserveAspectRatio="xMidYMid meet"
      className="icon dark-mode-icon"
    >

      <g
        transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
      >
        <path d="M250 473 c0 -5 18 -19 40 -33 90 -55 105 -175 32 -254 -76 -81 -205
-70 -262 24 -14 22 -28 40 -32 40 -26 1 14 -114 55 -159 33 -36 115 -71 167
-71 52 0 134 35 167 71 34 37 63 110 63 159 0 52 -35 134 -71 167 -45 41 -160
81 -159 56z m145 -77 c81 -82 87 -198 12 -283 -83 -94 -213 -97 -303 -8 -53
54 -57 73 -8 40 65 -44 141 -45 205 -2 91 61 114 173 54 261 -33 49 -14 45 40
-8z"
        />
      </g>
    </svg>
  );
}

export function NewGroupIcon() {
  return (
    <svg width="700pt" height="700pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" className="popup-svg">
      <g>
        <path d="m230.36 39.203c25.051 0 49.074 9.9492 66.785 27.664 17.715 17.711 27.664 41.734 27.664 66.785 0 25.051-9.9492 49.074-27.664 66.785-17.711 17.715-41.734 27.664-66.785 27.664s-49.074-9.9492-66.789-27.664c-17.711-17.711-27.66-41.734-27.66-66.785 0-25.051 9.9492-49.074 27.66-66.785 17.715-17.715 41.738-27.664 66.789-27.664m0-39.203c-35.449 0-69.441 14.082-94.508 39.145-25.062 25.066-39.145 59.062-39.145 94.508 0 35.445 14.082 69.441 39.145 94.508 25.066 25.062 59.059 39.145 94.508 39.145 35.445 0 69.441-14.082 94.508-39.145 25.062-25.066 39.145-59.062 39.145-94.508-0.054687-35.43-14.152-69.395-39.207-94.445-25.051-25.055-59.016-39.152-94.445-39.207z" />
        <path d="m512.09 103.79c18.543 0 36.324 7.3711 49.43 20.492 13.105 13.117 20.461 30.906 20.441 49.449-0.015626 18.543-7.4062 36.32-20.535 49.414-13.133 13.09-30.93 20.426-49.473 20.391-18.543-0.035156-36.312-7.4414-49.391-20.586-13.082-13.141-20.398-30.945-20.348-49.488 0.054687-18.496 7.4414-36.219 20.539-49.277s30.84-20.395 49.336-20.395m0-39.203v0.003906c-28.875 0-56.566 11.469-76.984 31.887s-31.887 48.109-31.887 76.984 11.469 56.566 31.887 76.984 48.109 31.887 76.984 31.887 56.566-11.469 76.984-31.887 31.887-48.109 31.887-76.984-11.469-56.566-31.887-76.984-48.109-31.887-76.984-31.887z" />
        <path d="m659.55 352.61c-24.758-24.824-58.375-38.781-93.438-38.793h-108.26c-24.734 0.089844-48.945 7.1289-69.871 20.312-26.91-18.262-58.68-28.023-91.203-28.031h-132.64c-43.078-0.089843-84.43 16.934-114.96 47.324-30.414 30.453-47.508 71.727-47.531 114.77v21.734c-0.050782 18.602 7.3125 36.457 20.469 49.609 13.152 13.152 31.008 20.52 49.609 20.465h317.27c13.066 0.039062 25.879-3.5977 36.977-10.492 11.098-6.8984 20.035-16.773 25.785-28.508h189.51c15.137 0 29.656-6.0117 40.359-16.715 10.703-10.707 16.719-25.223 16.719-40.359v-17.062c0.20313-35.344-13.773-69.293-38.797-94.25zm-239.68 137.31v0.003906c0 8.207-3.25 16.078-9.0312 21.902-5.7852 5.8203-13.637 9.1211-21.844 9.1719h-317.27c-8.207-0.050781-16.059-3.3516-21.844-9.1719-5.7852-5.8242-9.0312-13.695-9.0312-21.902v-21.734c0.054688-32.648 13.074-63.934 36.195-86.98 23.125-23.047 54.453-35.961 87.098-35.906h132.84c32.684 0 64.023 12.996 87.113 36.121 23.086 23.129 36.031 54.488 35.977 87.172zm239.27-26v0.003906c0 4.7383-1.8828 9.2852-5.2344 12.637-3.3555 3.3516-7.8984 5.2383-12.641 5.2383h-182.81v-13.609c-0.20312-39.289-14.637-77.172-40.621-106.64 12.215-5.668 25.527-8.582 38.996-8.5312h108.26c24.992-0.27344 49.039 9.5195 66.73 27.172 17.691 17.652 27.535 41.68 27.316 66.672z" />
      </g>
    </svg>
  );
}

export function NewPrivateChatIcon() {
  return (
    <svg width="700pt" height="700pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" className="popup-svg popup-svg_private">
      <path d="m280 140c18.566 0 36.371 7.375 49.496 20.504 13.129 13.125 20.504 30.93 20.504 49.496s-7.375 36.371-20.504 49.496c-13.125 13.129-30.93 20.504-49.496 20.504s-36.371-7.375-49.496-20.504c-13.129-13.125-20.504-30.93-20.504-49.496 0.019531-18.559 7.4023-36.352 20.527-49.473 13.121-13.125 30.914-20.508 49.473-20.527m0-23.332c-24.754 0-48.492 9.832-65.996 27.336s-27.336 41.242-27.336 65.996 9.832 48.492 27.336 65.996 41.242 27.336 65.996 27.336 48.492-9.832 65.996-27.336 27.336-41.242 27.336-65.996-9.832-48.492-27.336-65.996-41.242-27.336-65.996-27.336zm93.332 256.67v-0.003907c12.375 0.015625 24.234 4.9375 32.984 13.684 8.75 8.75 13.668 20.613 13.684 32.984v23.332h-280v-23.332c0.015625-12.371 4.9336-24.234 13.684-32.984 8.75-8.7461 20.609-13.668 32.984-13.684h186.67m0-23.332h-186.67c-18.566 0-36.371 7.375-49.5 20.504-13.125 13.125-20.5 30.93-20.5 49.496v46.668h326.66v-46.668c0-18.566-7.375-36.371-20.5-49.496-13.129-13.129-30.934-20.504-49.5-20.504zm233.33-70h-93.336v-93.332h-23.332v93.332h-93.332v23.332h93.332v93.332h23.332v-93.332h93.332z" />
    </svg>
  );
}
