import * as React from 'react';
import { useState } from 'react'
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import SelectBox from '../SelectBox';
import axios from 'axios'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ModalResult from '../Modal';
import { Button } from '@mui/material';
import Hyphenated from 'react-hyphen';

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
                const result = await axios
                    .post(`54.255.168.205:8000/mushroom/naive-bayes`, { body: bodyParameters });
                console.log(result);
            } catch (e) {
                console.log(e);
            }
        } else if (selectedBtn === 2) {
            // axios
            //     .post('http://127.0.0.1:8000/api/todo/add', bodyParameters, config)
            //     .then(res => {
            //         setLoading(false)
            //         navigate('/home')
            //     })
            //     .catch(err => {
            //         setLoading(false)
            //         console.log(err)
            //     })
        }
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
                                        label="Capshape"
                                        onChange={e => setCapshape(e.target.value)}
                                    >
                                        <MenuItem value={'b'}>Dạng hình chuông</MenuItem>
                                        <MenuItem value={'c'}>Dạng hình nón</MenuItem>
                                        <MenuItem value={'x'}>Dạng hình lồi</MenuItem>
                                        <MenuItem value={'f'}>Dạng hình phẳng</MenuItem>
                                        <MenuItem value={'k'}>Dạng hình nhô lên</MenuItem>
                                        <MenuItem value={'s'}>Dạng hình trũng xuống</MenuItem>
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
                                        label="Capcolor"
                                        onChange={e => setCapcolor(e.target.value)}
                                    >
                                        <MenuItem value={'n'}>Màu nâu</MenuItem>
                                        <MenuItem value={'b'}>Màu vàng xám</MenuItem>
                                        <MenuItem value={'c'}>Màu quế</MenuItem>
                                        <MenuItem value={'g'}>Màu xám</MenuItem>
                                        <MenuItem value={'r'}>Màu xanh lá</MenuItem>
                                        <MenuItem value={'p'}>Màu hồng</MenuItem>
                                        <MenuItem value={'u'}>Màu tím</MenuItem>
                                        <MenuItem value={'e'}>Màu đỏ</MenuItem>
                                        <MenuItem value={'w'}>Màu trắng</MenuItem>
                                        <MenuItem value={'y'}>Màu vàng</MenuItem>
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
                                        label="Bruises"
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
                                        label="Odor"
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
                                        label="Stalkshape"
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
                                        label="Stalkroot"
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
                                        label="Sporeprintcolor"
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
                                        label="Population"
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
                                        label="Habitat"
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
                                        label="Ringtype"
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
                            <Button variant="contained" type='submit' onClick={handleClickBtn1} color="success">Kiểm tra <br></br>(Naive Bayers)</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant="contained" type='submit' onClick={handleClickBtn2} color="success">Kiểm tra <br></br>(Cây quyết định)</Button>
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
                        Kết quả:
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 1, mb: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Giải thích:
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 1, mb: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                    <Button variant="contained" onClick={handleClose}>Kiểm tra trường hợp khác</Button>
                </Box>
            </Modal>
        </div>
    );
}