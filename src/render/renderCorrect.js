import setAttributes from '../utils/setAttributes';
import normalizeColor from '../utils/normalizeColor';

const correct = 'M29.049,5.009L28.19,4.151c-0.943-0.945-2.488-0.945-3.434,0L10.172,18.737l-5.175-5.173   c-0.943-0.944-2.489-0.944-3.432,0.001l-0.858,0.857c-0.943,0.944-0.943,2.489,0,3.433l7.744,7.752   c0.944,0.943,2.489,0.943,3.433,0L29.049,8.442C29.991,7.498,29.991,5.953,29.049,5.009z';
const incorrect = 'M16.043,11.667L22.609,5.1c0.963-0.963,0.963-2.539,0-3.502l-0.875-0.875   c-0.963-0.964-2.539-0.964-3.502,0L11.666,7.29L5.099,0.723c-0.962-0.963-2.538-0.963-3.501,0L0.722,1.598   c-0.962,0.963-0.962,2.539,0,3.502l6.566,6.566l-6.566,6.567c-0.962,0.963-0.962,2.539,0,3.501l0.876,0.875   c0.963,0.963,2.539,0.963,3.501,0l6.567-6.565l6.566,6.565c0.963,0.963,2.539,0.963,3.502,0l0.875-0.875   c0.963-0.963,0.963-2.539,0-3.501L16.043,11.667z';

/**
 * Create SVGPathElement from an annotation definition.
 * This is used for anntations of type `drawing`.
 *
 * @param {Object} a The annotation definition
 * @param {Boolean} correct Flag for annotation image
 * @return {SVGPathElement} The path to be rendered
 */
 export default function renderCorrect(a, flag) {
  const superGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

  if (a.x && a.y) {
    setAttributes(group, {
      transform: `translate(${a.x}, ${a.y})`
    });
  }

  setAttributes(path, {
    d: (flag) ? correct : incorrect,
    fill: normalizeColor(a.color || '#000')
  });

  group.appendChild(path);
  superGroup.appendChild(group);

  return superGroup;
}
