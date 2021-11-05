import { makeStyles, alpha } from '@material-ui/core/styles';

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
    tableHead: {
        background: '#cacaca',
    },
    tableBody: {
        background: alpha('#cba6a6', 0.8),
    },
    tableCell: {
        color: 'white',
    }
}));