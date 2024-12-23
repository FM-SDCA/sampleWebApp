import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import { useState } from 'react';

interface TableRow {
    id: number;
    name: string;
    age: number;
    city: string;
    hobby: string;
}

export default function Page3() {
    const [open, setOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState<TableRow | null>(null);
    const [imageSrc, setImageSrc] = useState('');

    const tableData : TableRow[] = [
        { id: 1, name: 'ボイラ運転１号機', age: 28, city: 'New York', hobby: 'Reading' },
        { id: 2, name: 'Jane Doe', age: 24, city: 'Los Angeles', hobby: 'Swimming' },
        { id: 3, name: 'Mike Smith', age: 32, city: 'Chicago', hobby: 'Cycling' },
        { id: 4, name: 'Mary Johnson', age: 29, city: 'Houston', hobby: 'Running' },
        { id: 5, name: 'James Brown', age: 35, city: 'Philadelphia', hobby: 'Walking' },
        { id: 6, name: 'Sarah White', age: 27, city: 'Phoenix', hobby: 'Hiking' },
        { id: 7, name: 'Robert Green', age: 31, city: 'San Antonio', hobby: 'Fishing' },
        { id: 8, name: 'Nancy Blue', age: 26, city: 'San Diego', hobby: 'Cooking' },
        { id: 9, name: 'Daniel Gray', age: 33, city: 'Dallas', hobby: 'Gardening' },
        { id: 10, name: 'Lisa Black', age: 30, city: 'San Jose', hobby: 'Painting' },
    ];

    const handleClickOpen = (row: TableRow) => {
        console.log(row);
        setSelectedRow(row);
        setImageSrc(`/images/${row.id}.png`);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedRow(null);
        setImageSrc('');
    };

    const handleImageClick = () => {
        const fileInput = document.getElementById('fileInput') as HTMLInputElement;
        if (fileInput) {
            fileInput.click();
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImageSrc(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };
    


    
    const tableCellStyle = {
        header: {
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.5), rgba(0, 31, 167, 0.5), rgba(0, 31, 167, 0.5))',
            color: 'purple',
            fontWeight: 'bold',
            fontSize: '32px',
            fontFamily: 'Arial, sans-serif',
            border: '3px solid white',
            height: '20px',
            maxHeight: '20px',
        },
        body: (rowIndex : number) => {
            let background;
            if (rowIndex < 3) {
                background = 'linear-gradient(180deg, rgba(255, 255, 255, 0.2), rgba(255, 0, 0, 0.5), rgba(255, 0, 0, 0.5))';
            } else if (rowIndex < 7) {
                background = 'linear-gradient(180deg, rgba(255, 255, 255, 0.5), rgba(0, 31, 167, 0.5),rgba(0, 31, 167, 0.5))';
            } else {
                background = 'linear-gradient(180deg,rgba(255, 255, 255, 0.5), rgba(0, 128, 0, 0.5), rgba(0, 128, 0, 0.5))';
            }
            return { 
                background,
                fontWeight: 'bold',
                fontSize: '32px',
                fontFamily: 'Arial, sans-serif',
                color: 'purple',
                border: '3px solid white',
                height: '70px',
            };
        },
    };

    return (
        <div>
            <div style={{ width: '80%', margin: '20px auto' }}>
                <h2>Data Table</h2>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell style={tableCellStyle.header}>ID</TableCell>
                                <TableCell style={tableCellStyle.header}>Name</TableCell>
                                <TableCell style={tableCellStyle.header}>Age</TableCell>
                                <TableCell style={tableCellStyle.header}>City</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableData.map((row, rowIndex) => (
                                <TableRow key={row.id} onClick={() => handleClickOpen(row)} style={{ cursor: 'pointer' }}>
                                    <TableCell style={tableCellStyle.body(rowIndex)}>{row.id}</TableCell>
                                    <TableCell style={tableCellStyle.body(rowIndex)}>{row.name}</TableCell>
                                    <TableCell style={tableCellStyle.body(rowIndex)}>{row.age}</TableCell>
                                    <TableCell style={tableCellStyle.body(rowIndex)}>{row.city}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Row Details</DialogTitle>
                <DialogContent>
                    {selectedRow && (
                        <>
                            <DialogContentText>
                                ID: {selectedRow.id}<br />
                                Name: {selectedRow.name}<br />
                                Age: {selectedRow.age}<br />
                                City: {selectedRow.city}<br />
                                Hobby: {selectedRow.hobby}
                            </DialogContentText>
                            <img src={imageSrc} alt="Placeholder" style={{ width: '100%', marginTop: '20px', cursor: 'pointer' }} onClick={handleImageClick} />
                            <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleFileChange} />
                        </>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
