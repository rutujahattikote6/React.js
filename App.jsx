import { Delete, Inbox, Mail, Save } from '@mui/icons-material';
import {
  AppBar,
  Button,
  Card,
  CardContent,
  Checkbox,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

function App() {
  const [openDialog, setOpenDialog] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [checked, setChecked] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleSnackbarOpen = () => {
    setOpenSnackbar(true);
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Container>
      <AppBar position="static" sx={{ backgroundColor: '#6a1b9a' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My MUI App
          </Typography>
          <Button color="inherit" onClick={handleDialogOpen}>
            Open Dialog
          </Button>
        </Toolbar>
      </AppBar>

      <Grid container spacing={3} sx={{ marginTop: 2 }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ maxWidth: 600, backgroundColor: '#f5f5f5', padding: 2 }}>
            <CardContent>
              <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
                Form
              </Typography>
              <TextField
                label="Enter something"
                variant="outlined"
                fullWidth
                margin="normal"
                value={inputValue}
                onChange={handleInputChange}
                sx={{ backgroundColor: '#ffffff' }} // TextField background color
              />
              <div>
                <Checkbox
                  checked={checked}
                  onChange={handleCheckboxChange}
                  color="primary"
                />
                <Typography variant="body1" component="span">
                  Check me
                </Typography>
              </div>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSnackbarOpen}
                sx={{ marginTop: 2, width: '100%', backgroundColor: '#4caf50' }} // Button color and width
              >
                Submit
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ maxWidth: 600, backgroundColor: '#e0e0e0', padding: 2 }}>
            <CardContent>
              <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
                Icons List
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Inbox />
                  </ListItemIcon>
                  <ListItemText primary="Inbox" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Mail />
                  </ListItemIcon>
                  <ListItemText primary="Mail" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Delete />
                  </ListItemIcon>
                  <ListItemText primary="Delete" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Save />
                  </ListItemIcon>
                  <ListItemText primary="Save" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card sx={{ maxWidth: '100%', backgroundColor: '#f5f5f5', padding: 2 }}>
            <CardContent>
              <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
                Data Table
              </Typography>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell align="right">Age</TableCell>
                      <TableCell align="right">Occupation</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[
                      { name: 'Rutuja Hattikote', age: 20, occupation: 'Software Engineer' },
                      { name: 'Shweta Jadhav', age: 21, occupation: 'Software Engineerr' },
                      { name: 'Rutuja patil', age: 22, occupation: 'Web developer' },
                    ].map((row) => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.age}</TableCell>
                        <TableCell align="right">{row.occupation}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Dialog */}
      <Dialog open={openDialog} onClose={handleDialogClose} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ backgroundColor: '#6a1b9a', color: '#fff' }}>Sample Dialog</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This is a sample dialog box. You can add any content here.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} sx={{ color: '#6a1b9a' }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message="Form submitted!"
      />
    </Container>
  );
}

export default App;
