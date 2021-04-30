import React, { useState } from 'react'
import DatePicker from '../../components/DatePicker'
import CountryPicker from '../../components/CountryPicker'
import FormInput from '../../components/FormInput'
import FormLabel from '../../components/FormLabel'
import Button from '../../components/Button'
import userAvater from '../../assets/userAvater.png'

import {
	ProfileContainer,
	DetailContainer,
	AvatarContainer,
	UserDetails,
	GroupButton,
	ProfileImage,
	ProfileName,
} from './ProfileElement'

import { LoginFormGroupInput } from '../login/LoginElement'

const Profile = () => {
	const [showDatePicker, setShowDatePicker] = useState(true)
	const [showCountryPicker, setShowCountryPicker] = useState(true)

	const handleStartEdit = () => {
		setShowCountryPicker(true)
		setShowDatePicker(true)
	}

	return (
		<ProfileContainer>
			<UserDetails>
				<AvatarContainer>
					<ProfileImage src={userAvater} alt='/' />
					<ProfileName>Jordy Tshibss</ProfileName>
				</AvatarContainer>
				<DetailContainer>
					<LoginFormGroupInput>
						<FormLabel label='Email' />
						<FormInput type='text' placeholder='Email' />
					</LoginFormGroupInput>
					<LoginFormGroupInput>
						<FormLabel label='Country' />
						<FormLabel label='Democratic Republic of Congo' />
					</LoginFormGroupInput>
					{showCountryPicker && (
						<LoginFormGroupInput>
							<FormLabel label='Update Country' />
							<CountryPicker />
						</LoginFormGroupInput>
					)}
					<LoginFormGroupInput>
						<FormLabel label='Date of birth' />
						<FormLabel label='1st of August 1997' />
					</LoginFormGroupInput>
					{showDatePicker && (
						<LoginFormGroupInput>
							<FormLabel label='Date of birth' />
							<DatePicker />
						</LoginFormGroupInput>
					)}
				</DetailContainer>
			</UserDetails>
			<GroupButton>
				<Button text='back' />
				<Button text='Edit' click={handleStartEdit} />
			</GroupButton>
		</ProfileContainer>
	)
}

export default Profile
