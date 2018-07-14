/**
 * @constructor
 * @ToggleModal
 * v-ToggleModal:close='setModal'
 */

export const ToggleModal = {
    inserted: function (el, binding) {
        el.onclick = e => {
            e.preventDefault();
            toggle(binding.arg);
            binding.value();
        }
    }
}

function toggle(modal) {
    let lastValModalHash = window.location.hash;
    lastValModalHash = lastValModalHash.slice(1);
    (modal !== "close" && modal !== lastValModalHash) ? window.location.hash = modal: window.location.hash = '';
};