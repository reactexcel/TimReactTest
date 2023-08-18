import React from 'react';
import AvatarIcon from '../assets/avatarIcon.svg';
import TwitterIcon from '../assets/twitterIcon.svg';
// border border-1 border-black inline-block py-8 px-5 shadow shadow-lg
const InfoCard = ({ classStyle, numberStyle, style, nameStyle }) => {
	return (
		<div className={`${classStyle} m-5 py-8 px-7 rounded-lg`}>
			<img src={AvatarIcon} width={50} className="mb-4" />
			<p className={`${nameStyle} font-bold leading-9`}>Johnny’s Cash</p>
			<div className="flex items-center gap-2">
				<img src={TwitterIcon} width={18} />
				<p className="text-[#7A869F] text-base">@degenjohndoe</p>
			</div>
			<div className={`flex items-center gap-2 mt-5 ${style}`}>
				<p className={`font-semibold ${numberStyle}`}>545</p>
				<p className="text-[#7A869F]">Followers</p>
			</div>
		</div>
	);
};

export default InfoCard;
