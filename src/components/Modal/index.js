import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

export default function ModalResult(props) {
    const [open, setOpen] = React.useState(props.isOpen);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    console.log(props.mushroom);
    console.log(props.isOpen);
    console.log(props.openBtn);
    return (
        <div>
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
