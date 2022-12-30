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
                    baseURL: 'https://54.255.168.205',
                    url: '/mushroom/naive-bayes',
                    data: bodyParameters
                });
                if (result.data['result'] === 'e') {
                    setIsMushRoom('nấm ăn được');
                    setIsMushRoomColor('green');
                    setIsMushRommPercent(result.data['explanation']['e']);
                } else if (result.data['result'] === 'p') {
                    setIsMushRoom('nấm độc');
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
                    baseURL: 'https://54.255.168.205',
                    url: '/mushroom/decision-tree',
                    data: bodyParameters
                });
                if (result.data['result'] === 'e') {
                    setIsMushRoom('nấm ăn được');
                    setIsMushRoomColor('green');

                } else if (result.data['result'] === 'p') {
                    setIsMushRoom('nấm độc');
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
                                    <InputLabel id="mushroom-shape1">Hình dạng mũ nấm</InputLabel>
                                    <Select
                                        labelId="mushroom-shape1"
                                        id="mushroom-shape-select1"
                                        value={capshape}
                                        label="Hình dạng mũ nấm"
                                        onChange={e => setCapshape(e.target.value)}
                                    >
                                        <MenuItem value={'b'} >
                                            <div style={inputStyle}>
                                                Dạng hình chuông
                                                <img src='/image/cap-shape/bell.jpg' style={imgStyle}></img>
                                            </div>
                                        </MenuItem>
                                        <MenuItem value={'c'}>
                                            <div style={inputStyle}>
                                                Dạng hình nón
                                                <img src='/image/cap-shape/conical.jpg' style={imgStyle}></img>
                                            </div>
                                        </MenuItem>
                                        <MenuItem value={'x'}>
                                            <div style={inputStyle}>
                                                Dạng hình lồi
                                                <img src='/image/cap-shape/convex.jpg' style={imgStyle}></img>
                                            </div>
                                        </MenuItem>
                                        <MenuItem value={'f'}>
                                            <div style={inputStyle}>
                                                Dạng hình phẳng
                                                <img src='/image/cap-shape/flat.jpg' style={imgStyle}></img>
                                            </div>
                                        </MenuItem>
                                        <MenuItem value={'k'}>
                                            <div style={inputStyle}>
                                                Dạng hình nhô lên
                                                <img src='/image/cap-shape/knobbed.jpg' style={imgStyle}></img>
                                            </div>
                                        </MenuItem>
                                        <MenuItem value={'s'}>
                                            <div style={inputStyle}>
                                                Dạng hình trũng xuống
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
                                    <InputLabel id="mushroom-shape2">Màu sắc mũ nấm</InputLabel>
                                    <Select
                                        labelId="mushroom-shape2"
                                        id="mushroom-shape-select2"
                                        value={capcolor}
                                        label="Màu sắc mũ nấm"
                                        onChange={e => setCapcolor(e.target.value)}
                                    >
                                        <MenuItem value={'n'}>
                                            <div style={inputStyle}>
                                                Màu nâu
                                                <img src='/image/color/1.png' style={img1Style}></img>
                                            </div>
                                        </MenuItem>
                                        <MenuItem value={'b'}>
                                            <div style={inputStyle}>
                                                Màu vàng xám
                                                <img src='/image/color/2.png' style={img1Style}></img>
                                            </div>
                                        </MenuItem>
                                        <MenuItem value={'c'}>
                                            <div style={inputStyle}>
                                                Màu quế
                                                <img src='/image/color/3.png' style={img1Style}></img>
                                            </div>
                                        </MenuItem>
                                        <MenuItem value={'g'}>
                                            <div style={inputStyle}>
                                                Màu xám
                                                <img src='/image/color/4.png' style={img1Style}></img>
                                            </div>
                                        </MenuItem>
                                        <MenuItem value={'r'}>
                                            <div style={inputStyle}>
                                                Màu xanh lá
                                                <img src='/image/color/5.png' style={img1Style}></img>
                                            </div>
                                        </MenuItem>
                                        <MenuItem value={'p'}>
                                            <div style={inputStyle}>
                                                Màu hồng
                                                <img src='/image/color/6.png' style={img1Style}></img>
                                            </div>
                                        </MenuItem>
                                        <MenuItem value={'u'}>
                                            <div style={inputStyle}>
                                                Màu tím
                                                <img src='/image/color/7.png' style={img1Style}></img>
                                            </div>
                                        </MenuItem>
                                        <MenuItem value={'e'}>
                                            <div style={inputStyle}>
                                                Màu đỏ
                                                <img src='/image/color/8.png' style={img1Style}></img>
                                            </div>
                                        </MenuItem>
                                        <MenuItem value={'w'}>
                                            <div style={inputStyle}>
                                                Màu trắng
                                                <img src='/image/color/9.png' style={img1Style}></img>
                                            </div>
                                        </MenuItem>
                                        <MenuItem value={'y'}>
                                            <div style={inputStyle}>
                                                Màu vàng
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
                                    <InputLabel id="mushroom-shape3">Vết thâm</InputLabel>
                                    <Select
                                        labelId="mushroom-shape3"
                                        id="mushroom-shape-select3"
                                        value={bruises}
                                        label="Vết thâm"
                                        onChange={e => setBruises(e.target.value)}
                                    >
                                        <MenuItem value={'t'}>Có</MenuItem>
                                        <MenuItem value={'f'}>Không</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="mushroom-shape4">Mùi hương</InputLabel>
                                    <Select
                                        labelId="mushroom-shape4"
                                        id="mushroom-shape-select4"
                                        value={odor}
                                        label="Mùi hương"
                                        onChange={e => setOdor(e.target.value)}
                                    >
                                        <MenuItem value={'a'}>Mùi hạnh nhân</MenuItem>
                                        <MenuItem value={'l'}>Mùi hoa hồi</MenuItem>
                                        <MenuItem value={'c'}>Mùi khét</MenuItem>
                                        <MenuItem value={'y'}>Mùi tanh cá</MenuItem>
                                        <MenuItem value={'f'}>Mùi hôi</MenuItem>
                                        <MenuItem value={'m'}>Mùi mốc</MenuItem>
                                        <MenuItem value={'n'}>Không mùi</MenuItem>
                                        <MenuItem value={'p'}>Mùi hăng</MenuItem>
                                        <MenuItem value={'s'}>Mùi cay</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="mushroom-shape5">Cuống nấm</InputLabel>
                                    <Select
                                        labelId="mushroom-shape5"
                                        id="mushroom-shape-select5"
                                        value={stalkshape}
                                        label="Cuống nấm"
                                        onChange={e => setStalkshape(e.target.value)}
                                    >
                                        <MenuItem value={'e'}>Phình to ra</MenuItem>
                                        <MenuItem value={'t'}>Thon ra</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="mushroom-shape6">Gốc</InputLabel>
                                    <Select
                                        labelId="mushroom-shape6"
                                        id="mushroom-shape-select6"
                                        value={stalkroot}
                                        label="Gốc"
                                        onChange={e => setStalkroot(e.target.value)}
                                    >
                                        <MenuItem value={'b'}>Dạng củ</MenuItem>
                                        <MenuItem value={'c'}>Hình chùy</MenuItem>
                                        <MenuItem value={'u'}>Hình cốc</MenuItem>
                                        <MenuItem value={'e'}>Cân bằng</MenuItem>
                                        <MenuItem value={'z'}>Thân rễ</MenuItem>
                                        <MenuItem value={'r'}>Cắm rễ</MenuItem>
                                        <MenuItem value={'?'}>Không có</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="mushroom-shape7">Màu bào tử</InputLabel>
                                    <Select
                                        labelId="mushroom-shape7"
                                        id="mushroom-shape-select7"
                                        value={sporeprintcolor}
                                        label="Màu bào tử"
                                        onChange={e => setSporeprintcolor(e.target.value)}
                                    >
                                        <MenuItem value={'k'}>Màu đen</MenuItem>
                                        <MenuItem value={'n'}>Màu nâu</MenuItem>
                                        <MenuItem value={'b'}>Màu vàng xám</MenuItem>
                                        <MenuItem value={'h'}>Màu sô cô la</MenuItem>
                                        <MenuItem value={'r'}>Màu xanh lá</MenuItem>
                                        <MenuItem value={'o'}>Màu cam</MenuItem>
                                        <MenuItem value={'u'}>Màu tím</MenuItem>
                                        <MenuItem value={'w'}>Màu trắng</MenuItem>
                                        <MenuItem value={'y'}>Màu vàng</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="mushroom-shape8">Kiểu mọc</InputLabel>
                                    <Select
                                        labelId="mushroom-shape8"
                                        id="mushroom-shape-select8"
                                        value={population}
                                        label="Kiểu mọc"
                                        onChange={e => setPopulation(e.target.value)}
                                    >
                                        <MenuItem value={'a'}>Mọc nhiều, dư thừa</MenuItem>
                                        <MenuItem value={'c'}>Thành cụm</MenuItem>
                                        <MenuItem value={'n'}>Rất nhiều</MenuItem>
                                        <MenuItem value={'s'}>Rải rác</MenuItem>
                                        <MenuItem value={'v'}>Thưa</MenuItem>
                                        <MenuItem value={'y'}>Mọc đơn lẻ</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="mushroom-shape9">Môi trường sống</InputLabel>
                                    <Select
                                        labelId="mushroom-shape9"
                                        id="mushroom-shape-select9"
                                        value={habitat}
                                        label="Môi trường sống"
                                        onChange={e => setHabitat(e.target.value)}
                                    >
                                        <MenuItem value={'g'}>Trên cỏ</MenuItem>
                                        <MenuItem value={'l'}>Trên lá mực</MenuItem>
                                        <MenuItem value={'m'}>Đồng cỏ</MenuItem>
                                        <MenuItem value={'p'}>Ven đường</MenuItem>
                                        <MenuItem value={'u'}>Vùng đô thị</MenuItem>
                                        <MenuItem value={'w'}>Cạnh rác thải</MenuItem>
                                        <MenuItem value={'d'}>Trên gỗ</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="mushroom-shape10">Vòng trên thân nấm</InputLabel>
                                    <Select
                                        labelId="mushroom-shape10"
                                        id="mushroom-shape-select10"
                                        value={ringtype}
                                        label="Vòng trên thân nấm<"
                                        onChange={e => setRingType(e.target.value)}
                                    >
                                        <MenuItem value={'c'}>Dạng mạng nhện</MenuItem>
                                        <MenuItem value={'e'}>Mờ dần dọc theo thân</MenuItem>
                                        <MenuItem value={'f'}>Loe ra</MenuItem>
                                        <MenuItem value={'l'}>Lớn</MenuItem>
                                        <MenuItem value={'n'}>Không có</MenuItem>
                                        <MenuItem value={'p'}>Dạng dây chuyền</MenuItem>
                                        <MenuItem value={'s'}>Vỏ bọc</MenuItem>
                                        <MenuItem value={'z'}>Tạo vùng</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Typography className='mushroom-box--button'>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Button variant="contained" type='submit' onClick={handleClickBtn1} color="success" disabled={!capshape && !capcolor && !odor && !bruises && !stalkroot && !stalkshape && !sporeprintcolor && !habitat && !population && !ringtype}>Kiểm tra <br></br>(Naive Bayers)</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant="contained" type='submit' onClick={handleClickBtn2} color="success" disabled={!capshape && !capcolor && !odor && !bruises && !stalkroot && !stalkshape && !sporeprintcolor && !habitat && !population && !ringtype}>Kiểm tra <br></br>(Cây quyết định)</Button>
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
                        Kết luận:
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 1, mb: 2 }}>
                        Loại nấm với thông tin nhập vào là <span style={{ color: isMushRommColor }}>{isMushRomm}</span>
                    </Typography>

                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Giải thích:
                    </Typography>

                    {selectedBtn === 1 &&
                        <Typography id="modal-modal-description" sx={{ mt: 1, mb: 2 }}>
                            Sử dụng giải thuật Naive-Bayes, hệ thống tính ra có {isMushRommPercent}% loại nấm với thông số nhập vào là {isMushRomm}.
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
                    <Button variant="contained" onClick={handleClose}>Kiểm tra trường hợp khác</Button>
                </Box>
            </Modal>
        </div >
    );
}