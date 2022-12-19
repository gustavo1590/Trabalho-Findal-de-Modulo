import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface Column {
  id: 'id' | 'description' | 'detail';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'id', label: 'ID' },
  { id: 'description', label: 'Descrição' },
  { id: 'detail', label: 'Detalhamento' },
];

interface Data {
  id: number;
  description: string;
  detail: string;
}

function createData(id: number, description: string, detail: string): Data {
  return { id, description, detail };
}
const rows = [
  createData(1, 'Descrição 1', 'Detalhe 1'),
  createData(2, 'Descrição 1', 'Detalhe 1'),
  createData(3, 'Descrição 1', 'Detalhe 1'),
  createData(4, 'Descrição 1', 'Detalhe 1'),
  createData(5, 'Descrição 1', 'Detalhe 1'),
  createData(6, 'Descrição 1', 'Detalhe 1'),
  createData(7, 'Descrição 1', 'Detalhe 1'),
  createData(8, 'Descrição 1', 'Detalhe 1'),
  createData(9, 'Descrição 1', 'Detalhe 1'),
  createData(10, 'Descrição 1', 'Detalhe 1'),
  createData(11, 'Descrição 1', 'Detalhe 1'),
  createData(12, 'Descrição 1', 'Detalhe 1'),
  createData(13, 'Descrição 1', 'Detalhe 1'),
  createData(14, 'Descrição 1', 'Detalhe 1'),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Typography variant="h3">Olá -user-</Typography>
      <br />
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                    {column.label}
                  </TableCell>
                ))}
                <TableCell>Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                    <TableCell>
                      <div style={{ display: 'flex' }}>
                        <IconButton color="error">
                          <DeleteIcon />
                        </IconButton>
                        <IconButton color="error">
                          <EditIcon />
                        </IconButton>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
