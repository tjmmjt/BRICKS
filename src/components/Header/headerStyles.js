
const headerStyles = {
    header: {
      // backgroundColor: "rgba(255, 255, 255, 0.2)",
      alignItems: 'center'
    },

    greenButtonStyle: {
        width: '100%',
        height: "3rem",
        mr: 0.5,
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
        backgroundColor: "rgba(167, 201, 13, 1)",
        textShadow: "1px 1px 20px black",
        '&:hover': {
          backgroundColor: 'rgba(167, 201, 13, .7)',
          borderColor: 'black',
          boxShadow: 'none',
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: '#0062cc',
          borderColor: '#005cbf',
        },
        '&:focus': {
          boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
      },
    
    orangeButtonStyle: {
          width: "100%",
          height: "3rem",
          mr: 0.5,
          fontSize: 18,
          fontWeight: "bold",
          color: "black",
          backgroundColor: "rgba(255, 174, 1, 1)",
          textShadow: "1px 1px 20px black",
          '&:hover': {
            backgroundColor: 'rgba(255, 174, 1, .7)',
            borderColor: 'black',
            boxShadow: 'none',
          },
          '&:active': {
            boxShadow: 'none',
            backgroundColor: '#0062cc',
            borderColor: '#005cbf',
          },
          '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
          },
        }
    }
    
    export default headerStyles