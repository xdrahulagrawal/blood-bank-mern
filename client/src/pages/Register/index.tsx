import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Button } from '@mui/material'
import SideBanner from '../../assets/images/SideImage.jpg'
import Textfield from '../../components/Textfield'
import SelectUserType from './SelectUserType'
import { DonarInterface } from '../../components/types'
import styles from '../../assets/styles/style'


const donar = {
  donarName: '',
  email: '',
  phone: '',
  password: '',
}
const hospital = {
  hospitalName: '',
  owner: '',
  email: '',
  website: '',
  phone: "",
  password: "",
  address: "",
}
const organization = {
  organizationName: '',
  owner: '',
  email: '',
  website: '',
  phone: "",
  password: "",
  address: "",
}
const Register = () => {
  const [userType, setUserType] = useState<string>('')
  const [donarUser, setDonarUser] = useState<any>(donar)
  const [hospitalUser, setHospitalUser] = useState<any>(hospital)
  const [organizationUser, setOrganizationUser] = useState<any>(organization)

  const _onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e?.target;
    if (userType === 'donar') {
      setDonarUser((prevDonarUser: DonarInterface) => ({
        ...prevDonarUser,
        [name]: value,
      }));
    }
    if (userType === 'hospital') {
      setHospitalUser((prevHospitalUser: DonarInterface) => ({
        ...prevHospitalUser,
        [name]: value,
      }));
    }
    if (userType === 'organization') {
      setOrganizationUser((prevOrganizationUser: DonarInterface) => ({
        ...prevOrganizationUser,
        [name]: value,
      }));
    }

  }

  const _onSubmitHanlder = () => {
    console.log({ userType, organizationUser });
  }

  return (
    <>
      <Box sx={styles['registerContainer']}>
        <Box component='img' src={SideBanner} alt='SideBanner' width='50%' height='auto' />
        <Box sx={styles['sideTextFiledContainer']}>
          <SelectUserType setUserType={setUserType} />
          {userType === 'donar' && <>
            {['donarName', 'email', 'phone', 'password'].map((label: any) => (
              <Textfield
                key={label}
                helperText='IncorrectData'
                value={donarUser[label]}
                label={`Enter Your ${label}`}
                error={false}
                name={label}
                _onChangeHandler={_onChangeHandler}
              />
            ))}</>}
          {userType === 'hospital' && <>{['hospitalName', 'owner', "email", "website", 'phone', 'password', "address"].map(label => (
            <Textfield key={label} helperText='IncorrectData' label={`Enter Your ${label}`} error={false} value={hospitalUser[label]} _onChangeHandler={_onChangeHandler} name={label}
            />
          ))}</>}
          {userType === 'organization' && <>{['organizationName', 'owner', "email", "website", 'phone', 'password', "address"].map(label => (
            <Textfield key={label} helperText='IncorrectData' label={`Enter Your ${label}`} error={false} value={organizationUser[label]} _onChangeHandler={_onChangeHandler} name={label}
            />
          ))}</>}
          <Button color='primary' variant="contained" onClick={_onSubmitHanlder}>
            Register
          </Button>
          <Box component='h4'>
            <Link to='/login' style={{ color: 'black' }}> Already have a account? Login</Link>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Register
