import { ToastBar, Toaster, toast } from 'react-hot-toast';
import {
    Typography,
    Box,
} from '@mui/material';
import { amber, blue, grey, red } from '@mui/material/colors';
import CancelIcon from '@mui/icons-material/Cancel';
import { VerticalAlignCenter } from '../GeneralBoxOption';
import { useEffect, useState } from 'react';

const ToasterComp = () => {
    // const [timer, setTimer] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setTimer((prevTimer) => (prevTimer >= 360 ? 0 : prevTimer + 1));
    //     }, 20);

    //     return () => clearInterval(interval);
    // }, []);

    return (
        <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={8}
            toastOptions={{
                duration: 40000,
                style: {
                    fontFamily: `游ゴシック`,
                    fontWeight: 'bold',
                },
                success: {
                    duration: 3000,
                },
                error: { duration: 3000 },
                closeError: {
                    duration: 120000,
                    icon: <CancelIcon sx={{ color: red[500] }} />,
                },
            }}
        >
            {(t) => (
                <ToastBar
                    toast={t}
                    style={{
                        ...t.style,
                        display: 'flex',
                        bgcolor:"white",
                        width: "100%",
                        boxShadow: 3,
                        borderRadius: 100,
                        border: 2,
                        borderColor: 'none',
                        padding: 2,
                    }}
                >
                    {({ icon, message }) => (
                        <Box sx={{width:"100%",height:"100%"}}>
                            <Box
                                sx={{
                                    ...VerticalAlignCenter,
                                    width: '100%',
                                    height: '100%',
                                }}
                            >
                                <Box
                                    sx={{
                                        ...VerticalAlignCenter,
                                        m: 1,
                                    }}
                                >
                                    {icon}
                                </Box>
                                <Box
                                    sx={{
                                        my: 1,
                                        whiteSpace: 'pre-line',
                                        width: "100%",
                                    }}
                                >
                                    <Typography sx={{ wordBreak: 'break-all' }}>
                                        {String(message.props.children).replace(
                                            /<br>/g,
                                            '\n'
                                        )}
                                    </Typography>
                                </Box>
                                {t.type == 'closeError' && (
                                    <Box
                                        onClick={() => toast.dismiss(t.id)}
                                        sx={{
                                            ...VerticalAlignCenter,
                                            width: 80,
                                            borderTopRightRadius: 5,
                                            borderBottomRightRadius: 5,
                                            height: '100%',
                                            backgroundColor: amber[400],
                                            color: 'black',
                                            ':hover': {
                                                backgroundColor: amber[300],
                                                cursor: 'pointer',
                                            },
                                        }}
                                    >
                                        <Typography
                                            width={'100%'}
                                            textAlign={'center'}
                                            fontSize={14}
                                        >
                                            Close
                                        </Typography>
                                    </Box>
                                )}
                            </Box>
                        </Box>
                    )}
                </ToastBar>
            )}
        </Toaster>
    );
};
export default ToasterComp;
