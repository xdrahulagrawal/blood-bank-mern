const commonContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '50%',
    backgroundColor: '#F7FBFE',

};

export default {
    registerContainer: {
        display: 'flex',
        width: '100%',
        height: '100vh'
    },
    sideTextFiledContainer: {
        ...commonContainerStyles,
        justifyContent: 'space-around',
    },
    LoginTextFiledConatiner: {
        gap: '50px',
        ...commonContainerStyles
    }
}