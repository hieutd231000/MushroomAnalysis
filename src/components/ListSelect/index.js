import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import axios from 'axios'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ListBox() {
    const [capshape, setCapshape] = React.useState('');
    const [capcolor, setCapcolor] = React.useState('');
    const [bruises, setBruises] = React.useState('');
    const [odor, setOdor] = React.useState('');
    const [stalkshape, setStalkshape] = React.useState('');
    const [stalkroot, setStalkroot] = React.useState('');
    const [sporeprintcolor, setSporeprintcolor] = React.useState('');
    const [population, setPopulation] = React.useState('');
    const [habitat, setHabitat] = React.useState('');
    const [ringtype, setRingType] = React.useState('');
    const [isMushRomm, setIsMushRoom] = React.useState('');
    const [isMushRommColor, setIsMushRoomColor] = React.useState('');
    const [isMushRommPercent, setIsMushRommPercent] = React.useState('');
    const [mushRommResultV2, setMushRommResultV2] = React.useState([]);

    const bodyParameters = {
        "cap-shape": capshape,
        "cap-color": capcolor,
        bruises,
        odor,
        "stalk-shape": stalkshape,
        "stalk-root": stalkroot,
        "spore-print-color": sporeprintcolor,
        population,
        habitat,
        "ring-type": ringtype,
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        textAlign: 'center'
    };

    const inputStyle = {
        display: 'flex',
        alignItems: 'center'
    }

    const imgStyle = {
        width: '50px',
        height: '50px',
        marginLeft: '10px',
        borderRadius: '10px'
    }

    const img1Style = {
        width: '30px',
        height: '30px',
        marginLeft: '10px',
        borderRadius: '10px'
    }

    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const [selectedBtn, setSelectedBtn] = React.useState(0);

    const handleClickBtn1 = () => {
        setSelectedBtn(1);
    }

    const handleClickBtn2 = () => {
        setSelectedBtn(2);
    }

    const handleSubmit = async e => {
        setOpen(true);
        e.preventDefault();
        console.log(bodyParameters);
        console.log('btn: ' + selectedBtn);
        if (selectedBtn === 1) {
            console.log("test");
            try {
                const result = await axios({
                    method: 'POST',
                    baseURL: 'http://localhost:8000',
                    url: '/mushroom/naive-bayes',
                    data: bodyParameters
                });
                if (result.data['result'] === 'e') {
                    setIsMushRoom('n???m ??n ???????c');
                    setIsMushRoomColor('green');
                    setIsMushRommPercent(result.data['explanation']['e']);
                } else if (result.data['result'] === 'p') {
                    setIsMushRoom('n???m ?????c');
                    setIsMushRoomColor('red');
                    setIsMushRommPercent(result.data['explanation']['p']);
                }
                console.log(result.data);
            } catch (e) {
                console.log(e);
            }
        } else if (selectedBtn === 2) {
            console.log("test1");
            try {
                const result = await axios({
                    method: 'POST',
                    baseURL: 'http://localhost:8000',
                    url: '/mushroom/decision-tree',
                    data: bodyParameters
                });
                if (result.data['result'] === 'e') {
                    setIsMushRoom('n???m ??n ???????c');
                    setIsMushRoomColor('green');

                } else if (result.data['result'] === 'p') {
                    setIsMushRoom('n???m ?????c');
                    setIsMushRoomColor('red');
                }
                setMushRommResultV2(result.data['explanation']);
                console.log(result.data['explanation']);
            } catch (e) {
                console.log(e);
            }
        }
    }

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }



    return (
        <div>
            <form variant="body2" color="text.secondary" onSubmit={e => handleSubmit(e)}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="mushroom-shape1">H??nh d???ng m?? n???m</InputLabel>
                                    <Select
                                        labelId="mushroom-shape1"
                                        id="mushroom-shape-select1"
                                        value={capshape}
                                        label="H??nh d???ng m?? n???m"
                                        onChange={e => setCapshape(e.target.value)}
                                    >
                                        <MenuItem value={'b'} >
                                            <div style={inputStyle}>
                                                D???ng h??nh chu??ng
                                                <img src='/image/cap-shape/bell.jpg' style={imgStyle}></img>
                                            </div>
                                        </MenuItem>
                                        <MenuItem value={'c'}>
                                            <div style={inputStyle}>
                                                D???ng h??nh n??n
                                                <img src='/image/cap-shape/conical.jpg' style={imgStyle}></img>
                                            </div>
                                        </MenuItem>
                                        <MenuItem value={'x'}>
                                            <div style={inputStyle}>
                                                D???ng h??nh l???i
                                                <img src='/image/cap-shape/convex.jpg' style={imgStyle}></img>
                                            </div>
                                        </MenuItem>
                                        <MenuItem value={'f'}>
                                            <div style={inputStyle}>
                                                D???ng h??nh ph???ng
                                                <img src='/image/cap-shape/flat.jpg' style={imgStyle}></img>
                                            </div>
                                        </MenuItem>
                                        <MenuItem value={'k'}>
                                            <div style={inputStyle}>
                                                D???ng h??nh nh?? l??n
                                                <img src='/image/cap-shape/knobbed.jpg' style={imgStyle}></img>
                                            </div>
                                        </MenuItem>
                                        <MenuItem value={'s'}>
                                            <div style={inputStyle}>
                                                D???ng h??nh tr??ng xu???ng
                                                <img src='/image/cap-shape/sunken.jpg' style={imgStyle}></img>
                                            </div>
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="mushroom-shape2">M??u s???c m?? n???m</InputLabel>
                                    <Select
                                        labelId="mushroom-shape2"
                                        id="mushroom-shape-select2"
                                        value={capcolor}
                                        label="M??u s???c m?? n???m"
                                        onChange={e => setCapcolor(e.target.value)}
                                    >
                                        <MenuItem value={'n'}>
                                            <div style={inputStyle}>
                                                M??u n??u
                                                <img src='/image/color/1.png' style={img1Style}></img>
                                            </div>
                                        </MenuItem>
                                        <MenuItem value={'b'}>
                                            <div style={inputStyle}>
                                                M??u v??ng x??m
                                                <img src='/image/color/2.png' style={img1Style}></img>
                                            </div>
                                        </MenuItem>
                                        <MenuItem value={'c'}>
                                            <div style={inputStyle}>
                                                M??u qu???
                                                <img src='/image/color/3.png' style={img1Style}></img>
                                            </div>
                                        </MenuItem>
                                        <MenuItem value={'g'}>
                                            <div style={inputStyle}>
                                                M??u x??m
                                                <img src='/image/color/4.png' style={img1Style}></img>
                                            </div>
                                        </MenuItem>
                                        <MenuItem value={'r'}>
                                            <div style={inputStyle}>
                                                M??u xanh l??
                                                <img src='/image/color/5.png' style={img1Style}></img>
                                            </div>
                                        </MenuItem>
                                        <MenuItem value={'p'}>
                                            <div style={inputStyle}>
                                                M??u h???ng
                                                <img src='/image/color/6.png' style={img1Style}></img>
                                            </div>
                                        </MenuItem>
                                        <MenuItem value={'u'}>
                                            <div style={inputStyle}>
                                                M??u t??m
                                                <img src='/image/color/7.png' style={img1Style}></img>
                                            </div>
                                        </MenuItem>
                                        <MenuItem value={'e'}>
                                            <div style={inputStyle}>
                                                M??u ?????
                                                <img src='/image/color/8.png' style={img1Style}></img>
                                            </div>
                                        </MenuItem>
                                        <MenuItem value={'w'}>
                                            <div style={inputStyle}>
                                                M??u tr???ng
                                                <img src='/image/color/9.png' style={img1Style}></img>
                                            </div>
                                        </MenuItem>
                                        <MenuItem value={'y'}>
                                            <div style={inputStyle}>
                                                M??u v??ng
                                                <img src='/image/color/10.jpg' style={img1Style}></img>
                                            </div>
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="mushroom-shape3">V???t th??m</InputLabel>
                                    <Select
                                        labelId="mushroom-shape3"
                                        id="mushroom-shape-select3"
                                        value={bruises}
                                        label="V???t th??m"
                                        onChange={e => setBruises(e.target.value)}
                                    >
                                        <MenuItem value={'t'}>C??</MenuItem>
                                        <MenuItem value={'f'}>Kh??ng</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="mushroom-shape4">M??i h????ng</InputLabel>
                                    <Select
                                        labelId="mushroom-shape4"
                                        id="mushroom-shape-select4"
                                        value={odor}
                                        label="M??i h????ng"
                                        onChange={e => setOdor(e.target.value)}
                                    >
                                        <MenuItem value={'a'}>M??i h???nh nh??n</MenuItem>
                                        <MenuItem value={'l'}>M??i hoa h???i</MenuItem>
                                        <MenuItem value={'c'}>M??i kh??t</MenuItem>
                                        <MenuItem value={'y'}>M??i tanh c??</MenuItem>
                                        <MenuItem value={'f'}>M??i h??i</MenuItem>
                                        <MenuItem value={'m'}>M??i m???c</MenuItem>
                                        <MenuItem value={'n'}>Kh??ng m??i</MenuItem>
                                        <MenuItem value={'p'}>M??i h??ng</MenuItem>
                                        <MenuItem value={'s'}>M??i cay</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="mushroom-shape5">Cu???ng n???m</InputLabel>
                                    <Select
                                        labelId="mushroom-shape5"
                                        id="mushroom-shape-select5"
                                        value={stalkshape}
                                        label="Cu???ng n???m"
                                        onChange={e => setStalkshape(e.target.value)}
                                    >
                                        <MenuItem value={'e'}>Ph??nh to ra</MenuItem>
                                        <MenuItem value={'t'}>Thon ra</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="mushroom-shape6">G???c</InputLabel>
                                    <Select
                                        labelId="mushroom-shape6"
                                        id="mushroom-shape-select6"
                                        value={stalkroot}
                                        label="G???c"
                                        onChange={e => setStalkroot(e.target.value)}
                                    >
                                        <MenuItem value={'b'}>D???ng c???</MenuItem>
                                        <MenuItem value={'c'}>H??nh ch??y</MenuItem>
                                        <MenuItem value={'u'}>H??nh c???c</MenuItem>
                                        <MenuItem value={'e'}>C??n b???ng</MenuItem>
                                        <MenuItem value={'z'}>Th??n r???</MenuItem>
                                        <MenuItem value={'r'}>C???m r???</MenuItem>
                                        <MenuItem value={'?'}>Kh??ng c??</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="mushroom-shape7">M??u b??o t???</InputLabel>
                                    <Select
                                        labelId="mushroom-shape7"
                                        id="mushroom-shape-select7"
                                        value={sporeprintcolor}
                                        label="M??u b??o t???"
                                        onChange={e => setSporeprintcolor(e.target.value)}
                                    >
                                        <MenuItem value={'k'}>M??u ??en</MenuItem>
                                        <MenuItem value={'n'}>M??u n??u</MenuItem>
                                        <MenuItem value={'b'}>M??u v??ng x??m</MenuItem>
                                        <MenuItem value={'h'}>M??u s?? c?? la</MenuItem>
                                        <MenuItem value={'r'}>M??u xanh l??</MenuItem>
                                        <MenuItem value={'o'}>M??u cam</MenuItem>
                                        <MenuItem value={'u'}>M??u t??m</MenuItem>
                                        <MenuItem value={'w'}>M??u tr???ng</MenuItem>
                                        <MenuItem value={'y'}>M??u v??ng</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="mushroom-shape8">Ki???u m???c</InputLabel>
                                    <Select
                                        labelId="mushroom-shape8"
                                        id="mushroom-shape-select8"
                                        value={population}
                                        label="Ki???u m???c"
                                        onChange={e => setPopulation(e.target.value)}
                                    >
                                        <MenuItem value={'a'}>M???c nhi???u, d?? th???a</MenuItem>
                                        <MenuItem value={'c'}>Th??nh c???m</MenuItem>
                                        <MenuItem value={'n'}>R???t nhi???u</MenuItem>
                                        <MenuItem value={'s'}>R???i r??c</MenuItem>
                                        <MenuItem value={'v'}>Th??a</MenuItem>
                                        <MenuItem value={'y'}>M???c ????n l???</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="mushroom-shape9">M??i tr?????ng s???ng</InputLabel>
                                    <Select
                                        labelId="mushroom-shape9"
                                        id="mushroom-shape-select9"
                                        value={habitat}
                                        label="M??i tr?????ng s???ng"
                                        onChange={e => setHabitat(e.target.value)}
                                    >
                                        <MenuItem value={'g'}>Tr??n c???</MenuItem>
                                        <MenuItem value={'l'}>Tr??n l?? m???c</MenuItem>
                                        <MenuItem value={'m'}>?????ng c???</MenuItem>
                                        <MenuItem value={'p'}>Ven ???????ng</MenuItem>
                                        <MenuItem value={'u'}>V??ng ???? th???</MenuItem>
                                        <MenuItem value={'w'}>C???nh r??c th???i</MenuItem>
                                        <MenuItem value={'d'}>Tr??n g???</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="mushroom-shape10">V??ng tr??n th??n n???m</InputLabel>
                                    <Select
                                        labelId="mushroom-shape10"
                                        id="mushroom-shape-select10"
                                        value={ringtype}
                                        label="V??ng tr??n th??n n???m<"
                                        onChange={e => setRingType(e.target.value)}
                                    >
                                        <MenuItem value={'c'}>D???ng m???ng nh???n</MenuItem>
                                        <MenuItem value={'e'}>M??? d???n d???c theo th??n</MenuItem>
                                        <MenuItem value={'f'}>Loe ra</MenuItem>
                                        <MenuItem value={'l'}>L???n</MenuItem>
                                        <MenuItem value={'n'}>Kh??ng c??</MenuItem>
                                        <MenuItem value={'p'}>D???ng d??y chuy???n</MenuItem>
                                        <MenuItem value={'s'}>V??? b???c</MenuItem>
                                        <MenuItem value={'z'}>T???o v??ng</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Typography className='mushroom-box--button'>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Button variant="contained" type='submit' onClick={handleClickBtn1} color="success" disabled={!capshape && !capcolor && !odor && !bruises && !stalkroot && !stalkshape && !sporeprintcolor && !habitat && !population && !ringtype}>Ki???m tra <br></br>(Naive Bayers)</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant="contained" type='submit' onClick={handleClickBtn2} color="success" disabled={!capshape && !capcolor && !odor && !bruises && !stalkroot && !stalkshape && !sporeprintcolor && !habitat && !population && !ringtype}>Ki???m tra <br></br>(C??y quy???t ?????nh)</Button>
                        </Grid>
                    </Grid>
                    {/* <ModalResult mushroom={bodyParameters} openBtn={selectedBtn} isOpen={open}></ModalResult> */}
                </Typography>
            </form>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        K???t lu???n:
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 1, mb: 2 }}>
                        C??y n???m v???i th??ng tin nh???p v??o l?? <span style={{ color: isMushRommColor }}>{isMushRomm}</span>
                    </Typography>

                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Gi???i th??ch:
                    </Typography>

                    {selectedBtn === 1 &&
                        <Typography id="modal-modal-description" sx={{ mt: 1, mb: 2 }}>
                            S??? d???ng gi???i thu???t Naive-Bayes, h??? th???ng t??nh ra r???ng c??y n???m v???i th??ng s??? v???a nh???p v??o c?? x??c su???t {isMushRommPercent}% l?? {isMushRomm}.
                        </Typography>
                    }
                    {selectedBtn === 2 &&
                        <TableContainer component={Paper} sx={{ mb: 2 }}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>no</TableCell>
                                        <TableCell align="right">node_id</TableCell>
                                        <TableCell align="right">feature</TableCell>
                                        <TableCell align="right">value</TableCell>
                                        <TableCell align="right">inequality_sign</TableCell>
                                        <TableCell align="right">threshold</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {mushRommResultV2.map((row) => (
                                        <TableRow
                                            key={row.node_id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.no}
                                            </TableCell>
                                            <TableCell align="right">{row.node_id}</TableCell>
                                            <TableCell align="right">{row.feature}</TableCell>
                                            <TableCell align="right">{row.value}</TableCell>
                                            <TableCell align="right">{row.inequality_sign}</TableCell>
                                            <TableCell align="right">{row.threshold}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    }
                    <Button variant="contained" onClick={handleClose}>Ki???m tra tr?????ng h???p kh??c</Button>
                </Box>
            </Modal>
        </div >
    );
}