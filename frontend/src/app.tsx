import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from 'views/home';
import { ViewNotes } from 'views/viewNotes';
import { MainLayout, NotesLayout } from 'views/layout';
import { ViewNote } from 'views/viewNote';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='notes' element={<NotesLayout />}>
            <Route index element={<ViewNotes />} />
            <Route path=':id' element={<ViewNote />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
