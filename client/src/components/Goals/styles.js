import {alpha, makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    mainContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    smMargin: {
        margin: theme.spacing(1),
    },
    actionDiv: {
        textAlign: 'center',
    },
    paper: {
        padding: theme.spacing(2),
        backgroundColor: alpha('#A598AA', 0.9),
        alignContent: 'center',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        position: 'relative',
        height: '80px',
    },
    cardContent: {
        background: alpha('#654171', 0.5),
    },
}));