import { makeStyles, alpha } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    overlay: {
        backgroundColor: alpha('#cba6a6', 0.9),
        width: '765px',
        height: '375px',
        border: '2',
        alignContent: 'center',
    },
    graph: {
        display: 'flex',
    }
}));