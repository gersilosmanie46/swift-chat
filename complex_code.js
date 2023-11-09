// filename: complex_code.js

// This complex code generates a fractal pattern using the Recursive Iterative Method (RIM).
// The pattern gets more intricate with each iteration and is displayed on an HTML canvas.

// Set up canvas
const canvas = document.getElementById('fractalCanvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
const width = 800;
const height = 600;
canvas.width = width;
canvas.height = height;

// Fractal settings
const maxIterations = 500;
const zoom = 0.005;

// Function to convert RGB values to hexadecimal
function rgbToHex(r, g, b) {
    return ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
}

// Function to generate fractal pattern
function generateFractal(x, y, maxIterations) {
    let zx = 0;
    let zy = 0;
    let zx2 = 0;
    let zy2 = 0;
    let iterations = 0;

    while (iterations < maxIterations && zx2 + zy2 < 4) {
        zy = 2 * zx * zy + y;
        zx = zx2 - zy2 + x;
        zx2 = zx * zx;
        zy2 = zy * zy;
        iterations++;
    }
    return iterations;
}

// Draw fractal on canvas
function drawFractal() {
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            const xi = (x - width / 2) * zoom;
            const yi = (y - height / 2) * zoom;
            const iterations = generateFractal(xi, yi, maxIterations);

            const color = rgbToHex(
                Math.floor((iterations * 255) / maxIterations),
                Math.floor((iterations * 200) / maxIterations),
                Math.floor((iterations * 150) / maxIterations)
            );

            ctx.fillStyle = '#' + color;
            ctx.fillRect(x, y, 1, 1);
        }
    }
}

// Run the code
drawFractal();