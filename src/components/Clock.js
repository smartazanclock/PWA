import React, { useContext, useEffect, useRef } from 'react'
import { AppContext } from '../AppContext';
import { format12 } from '../scripts/SmartAzanClock'

export default function Clock() {

    const { showMenu, setShowMenu, nextText, todaysDate, hijriDate, locationSettings,
        calculationSettings, deviceSettings, hourAngle, vakits, displayTime, currentVakit, nextVakit,
        elapsed, background, dim, clockOpacity } = useContext(AppContext)

    const canvasRef = useRef(null)

    const size = 1000; /* size = width = height */

    useEffect(() => {

        const ctx = (canvasRef.current).getContext("2d")

        updateBackground(background);

        sac.clearCanvas(ctx)
            .fillCircle(ctx, size * 0.5, 0, 0, "white", 0.21)
            .fillCircle(ctx, size * 0.481, 0, 0, "black")
            .drawNumbers24(ctx, size * 0.461, size * 0.013, 'whitesmoke')
            .drawArcs(ctx, size * 0.431, size * 0.041, vakits)
            .drawArrow(ctx, hourAngle, size * 0.481, size * 0.057, size * 0.057, 'black')
            .drawArrow(ctx, hourAngle, size * 0.481, size * 0.057, size * 0.053, 'whitesmoke')
            .drawCircle(ctx, size * 0.481, 'black', 9)
            .print(ctx, displayTime, size * 0.25, 'whitesmoke', -size * 0.027)
            .print(ctx, 'Elapsed ' + elapsed + ' · ' + nextVakit.name + ' in', 29, 'whitesmoke', size * 0.109)
            .print(ctx, nextText, size * 0.156, 'whitesmoke', size * 0.223)
            .arcText(ctx, 'top', todaysDate, 51, 337, 'white')
            .arcText(ctx, 'top', hijriDate, 33, 255, 'white')
            .arcText(ctx, 'bottom', '#vakits#', 33, 377, 'white')
            .arcText(ctx, 'bottom', 'Prayer Times for ' + locationSettings.address + ' using ' + calculationSettings.method + ' Calculation Method. SmartAzanClock.com', 13, 497, 'black')

    })

    const sac = {
        clearCanvas: (ctx) => {
            ctx.save();
            ctx.translate(0, 0);
            ctx.clearRect(0, 0, size, size);
            ctx.restore();
            return sac;
        },
        drawHand: (ctx, angle, from, to, lineWidth, color) => {
            ctx.save();
            ctx.translate(size / 2, size / 2);
            ctx.beginPath();
            ctx.rotate(angle);
            ctx.moveTo(from, 0);
            ctx.lineTo(to, 0);
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = color;
            ctx.lineCap = "round";
            ctx.stroke();
            ctx.restore();
            return sac;
        },
        fillCircle: (ctx, r, x, y, color, opacity) => {
            if (dim === 1)
                return sac;

            ctx.save();
            ctx.translate(size / 2, size / 2);
            if (opacity)
                ctx.globalAlpha = opacity;
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();
            ctx.restore();
            return sac;
        },
        print: (ctx, text, textSize, color, y) => {
            ctx.save();
            ctx.translate(size / 2, size / 2);
            ctx.font = 'bold ' + Math.floor(textSize) + 'px Arial';
            ctx.fillStyle = color;
            ctx.textBaseline = "middle";
            ctx.textAlign = 'center';
            ctx.fillText(text, 0, y);
            ctx.restore();
            return sac;
        },
        drawArrow: (ctx, angle, x, width, height, color) => {

            if (dim === 1)
                return sac;

            ctx.save();
            ctx.translate(size / 2, size / 2);
            ctx.rotate(angle);
            ctx.beginPath();
            ctx.moveTo(x, -width);
            ctx.lineTo(x, width);
            ctx.lineTo(x - height, 0);
            ctx.fillStyle = color;
            ctx.fill();
            ctx.restore();
            return sac;
        },
        drawNumbers24: (ctx, r, fontSize, color) => {

            if (dim === 1)
                return sac;

            let p;
            for (let n = 0; n < 24; n++) {
                ctx.save();
                ctx.translate(size / 2, size / 2);
                ctx.textBaseline = "middle";
                ctx.fillStyle = color;
                ctx.textAlign = "center";
                ctx.font = 'bold ' + fontSize + "px Arial";
                let ang = n * Math.PI / 12;
                ctx.rotate(ang);
                ctx.translate(0, r); /* move the cursor */
                ctx.rotate(-ang);
                if (n === 0)
                    p = 12 + 'A';
                else if (n === 12)
                    p = 12 + 'P';
                else if (n < 13)
                    p = n + 'A';
                else
                    p = (n - 12) + 'P';
                ctx.fillText(p, 0, 0);
                ctx.restore();
            }
            for (let m = 0; m < 144; m++) {
                ctx.save();
                ctx.translate(size / 2, size / 2);
                ctx.textBaseline = "middle";
                ctx.fillStyle = color;
                ctx.textAlign = "center";
                let ang = m * Math.PI / 72;
                ctx.rotate(ang);
                ctx.translate(0, r * 0.985);
                if (m % 6 === 0) {
                    /*
                    ctx.font = r * 0.051 + "px Arial";
                    ctx.fillText("|", 0, 0);
                    */
                }
                else {
                    ctx.font = r * 0.05 + "px Arial";
                    ctx.fillText(".", 0, 0);
                }
                ctx.restore();
            }

            return sac;

        },
        drawArcs: (ctx, r, arcWidth, vakits) => {

            if (dim === 1)
                return sac;

            let borderPadding = Math.PI / 450;
            for (let i = 0; i < vakits.length; i++) {
                ctx.save();
                ctx.translate(size / 2, size / 2);
                ctx.beginPath();
                ctx.strokeStyle = vakits[i].color;
                if (currentVakit.index === i) {
                    ctx.lineWidth = arcWidth * 0.59;
                    ctx.globalAlpha = 1;
                }
                else {
                    ctx.lineWidth = arcWidth * 0.23;
                    ctx.globalAlpha = 0.99;
                }
                ctx.arc(0, 0, r, vakits[i].startAngle24(), vakits[i].endAngle24() - borderPadding, false);
                ctx.stroke();
                ctx.restore();
            }
            return sac;
        },
        drawCircle: (ctx, r, color, lineWidth, opacity) => {
            ctx.save();
            ctx.translate(size / 2, size / 2);
            if (opacity)
                ctx.globalAlpha = opacity;
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.strokeStyle = color;
            ctx.lineWidth = lineWidth;
            ctx.stroke();
            ctx.restore();
            return sac;
        },
        arcText: (ctx, mode, text, fontSize, distanceFromCenter, color) => {

            if (text === '#vakits#') {
                text = '';
                for (let v in vakits) {
                    text += vakits[v].name + ' ' + format12(vakits[v].time);
                    if (v * 1 !== (vakits.length - 1) * 1)
                        text += ' · ';
                }
            }

            text = text.replace(/,/g, '')

            let startAngle = 0;
            ctx.font = 'bold ' + fontSize + 'px Arial';

            ctx.fillStyle = color;
            if (mode === 'top') {
                startAngle = -ctx.measureText(text).width / (2 * distanceFromCenter);
            }
            else {
                startAngle = ctx.measureText(text).width / (2 * distanceFromCenter);
            }

            let charWidth = {}
            for (var j = 0; j < text.length; j++) {
                charWidth[text[j]] = ctx.measureText(text[j]).width;
            }

            var thisSpace = 0;
            for (var i = 0; i < text.length; i++) {
                thisSpace += charWidth[text[i]] / distanceFromCenter;
                ctx.save();

                if (text[i] === '·')
                    ctx.fillStyle = 'yellow';

                ctx.translate(size / 2, size / 2);
                ctx.textAlign = "right";
                if (mode === 'top') {
                    ctx.rotate(startAngle + thisSpace);
                    ctx.fillText(text[i], 0, -distanceFromCenter);
                }
                else {
                    ctx.rotate(startAngle - thisSpace);
                    ctx.fillText(text[i], 0, distanceFromCenter);
                }

                ctx.restore();
            }
            return sac;
        }
    }

    const updateBackground = (bg) => {
        document.body.style.backgroundImage = 'url(' + bg + ')';
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';
    }

    return (
        <div className='d-flex flex-row h-100 align-items-center justify-content-center'>
            <div onClick={() => setShowMenu(!showMenu)}>
                <canvas id="clockCanvas" className="img-fluid"
                    style={{ opacity: clockOpacity }}
                    width={size} height={size} ref={canvasRef} ></canvas>
            </div>
        </div >
    );
}
