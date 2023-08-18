import React from 'react';
import AvatarIcon from '../assets/avatarIcon.svg';
import TwitterIcon from '../assets/twitterIcon.svg';
import styled from 'styled-components';

const NameHeading = styled.p`
	font-weight: 600;
	line-height: 40px;
`;
const UserName = styled.p`
	font-size: 16px;
	color: #7a869f;
`;
const FollowerHeading = styled.p`
	color: #7a869f;
`;
const FollowerCount = styled.p`
	font-weight: 400;
`;

const InfoCard = ({ classStyle, numberStyle, style, nameStyle }) => {
	return (
		<div className={`${classStyle} m-5 py-8 px-7 rounded-lg`}>
			<img src={AvatarIcon} width={50} className="mb-4" />
			<NameHeading className={`${nameStyle}`}>Johnny’s Cash</NameHeading>
			<div className="flex items-center gap-2">
				<img src={TwitterIcon} width={18} />
				<UserName>@degenjohndoe</UserName>
			</div>
			<div className={`flex items-center gap-2 mt-5 ${style}`}>
				<FollowerCount className={`${numberStyle}`}>545</FollowerCount>
				<FollowerHeading>Followers</FollowerHeading>
			</div>
		</div>
	);
};

export default InfoCard;
