import { OptionsIteminterface } from '@/interface'

const Item = ({ content, handleOnClick, selected, isDisabled }: OptionsIteminterface) => {
    return (
        <button disabled={selected === null ? false : true} style={{ backgroundColor: selected === content ? '#3b82f6' : isDisabled ? '#e6e6e6' : '#3b82f6', cursor: isDisabled ? 'not-allowed' : 'pointer' }}
            onClick={() => handleOnClick(content)} className='bg-blue-500 text-white text-sm font-semibold rounded-md px-4 py-2 hover:bg-blue-300' >
            {decodeURIComponent(content)}
        </button>
    )
}

export default Item