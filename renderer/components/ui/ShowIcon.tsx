

// interface showPass {
//     show: boolean
//     inp: number
// }

export const ShowIcon = ({show, inp, showPassword}) => {

    return(
        <i className={(show) ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'} onClick={() => (showPassword({
            show: !show,
            inp: inp
        }))} id="password-icon"></i>
    )
}