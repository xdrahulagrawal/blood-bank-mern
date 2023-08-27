import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box, Button } from '@mui/material'
import SideBanner from '../../assets/images/SideImage.jpg'
import Textfield from '../../components/Textfield'
import { DonarInterface } from '../../components/types'
import styles from '../../assets/styles/style'
import SelectUserType from '../Register/SelectUserType'



const login = {
  email: '',
  password: '',
}

const Login = () => {
  const [userType, setUserType] = useState<string>('')
  const [loginUser, setLoginUser] = useState<any>(login)


  const _onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e?.target;
    setLoginUser((prevDonarUser: DonarInterface) => ({
      ...prevDonarUser,
      [name]: value,
    }));
  }

  const _onSubmitHanlder = () => {
    console.log({ userType, loginUser });
  }
  useEffect(() => {
    setLoginUser(login)
  }, [userType])

  return (
    <>
      <Box sx={styles['registerContainer']}>
        <Box component='img' src={SideBanner} alt='SideBanner' width='50%' height='auto' />
        <Box sx={styles['LoginTextFiledConatiner']}>
          <SelectUserType setUserType={setUserType} />
          {['email', 'password'].map((label: any) => (
            <Textfield
              key={label}
              helperText='IncorrectData'
              value={loginUser[label]}
              label={`Enter Your ${label}`}
              error={false}
              name={label}
              _onChangeHandler={_onChangeHandler}
            />
          ))}
          <Button color='primary' variant="contained" onClick={_onSubmitHanlder}>
            Login
          </Button>
          <Box component='h4'>
            <Link to='/register' style={{ color: 'black' }}> Don't have an account? Register</Link>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Login
