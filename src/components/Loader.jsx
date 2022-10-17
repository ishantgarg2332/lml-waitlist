import Spinner from '../assets/images/spinner.svg';

const Loader = ({loader}) => {
    return <img src={Spinner} alt="loader" style={{
        display: !loader && 'none',
        position: 'absolute',
        left: '42%',
        top: '35%'
      }}/>
}

export default Loader;