# React + Vite Waste Disposal Stepper Project
A responsive design that allows users to select types of waste for disposal guiding them through a multi-step process using a dynamic progress bar and interactive components

## Technologies 
- React.js
- Vite
- React Icons/ font awesome icons

## Project Features
- Responsive design

## Project Approach and Design
- A stateful `Progress` component tracks step progress and animates accordingly.
- Waste type cards are generated from a reusable data array and support toggling detailed info.
- Selection state is managed using React’s `useState` to allow multi-select functionality.
- Selection summary logic limits display to two items, then appends "and X more" for readability.
- Reusable components (`WasteTypeCard`, etc.) promote clean structure and easier maintenance.
- A `SkipSize` component to allow selction of skips.
- A `Permit selector` component to allow selection of permits whether Private or public.

## Getting Started

git clone https://github.com/BurkyCodes/REM-Stepper.git
cd stepper
npm install
npm start

## Folder Structure

- `components/` – Reusable UI components
- `DummyData/` – Sample data (e.g. waste types)

