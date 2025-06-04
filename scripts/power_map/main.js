import { get_shader_program } from "./shader.js";

async function main(buffer) {
    var shader_program = await get_shader_program();
    requestAnimationFrame(() => main_loop(shader_program, buffer));
}

function main_loop(program, buffer) {
    // Get gps data and power consumption

    // Some function to get data
    // buffer += server.get_data();
    create_buffers(program, buffer);
}

function create_buffers(program, points) {
    var positions = [];
    var colors = [];
    for (i in Range(points)) {
        if (i % 3 == 1) {
            colors.push(points[i]);
        }
        positions.push(points[i]);
    }

    create_position_buffer(program, positions);
    create_color_buffer(program, colors);
}

function create_position_buffer(program, positions) {
    var position_attribute_location = gl.getAttribLocation(program, "a_pos");
    gl.bindBuffer(gl.ARRAY_BUFFER, positions);
    var size = 2;
    var type = gl.FLOAT;
    var normalize = false;
    var stride = 2 * Float32Array.BYTES_PER_ELEMENT;
    var offset = 0;
    gl.enableVertexAttribArray(position_attribute_location, size, type, normalize, stride, offset);
}

function create_color_buffer(program, colors) {
    var color_attribute_location = gl.getAttribLocation(program, "a_col");
    gl.bindBuffer(gl.ARRAY_BUFFER, colors);

}

window.main = main;
