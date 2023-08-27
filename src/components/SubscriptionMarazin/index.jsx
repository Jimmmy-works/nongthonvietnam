import { Box, Button, Input, Textarea } from '@mui/joy';
import React, { useState } from 'react';
import Radio from '@mui/joy/Radio';
import { useMainContext } from '../MainContext';
import { twMerge } from 'tailwind-merge';
import Overplay from '../Overplay';
const SubscriptionMarazin = () => {
  const [payment, setPayment] = useState('');
  const [receive, setReceive] = useState('');
  const {
    controlSubscriptionMagazine,
    ToogleSubscriptionMagazine,
    setControlSubscriptionMagazine,
  } = useMainContext();

  return (
    <div
      className={twMerge(`${
        controlSubscriptionMagazine
          ? 'visible opacity-100'
          : ' invisible opacity-0'
      }  fixed left-0 top-0 z-[10001]  flex h-full w-full items-center justify-center 
     transition-all duration-[400ms]`)}
    >
      <Overplay className="cursor-pointer" />
      <div
        className=" z-[1002] h-full max-h-[550px] w-full max-w-[460px] 
       bg-white-f "
      >
        <form
          className=" custom-scrollbar-div h-full overflow-y-scroll px-[40px] py-[20px]"
          action=""
        >
          <div className="mb-[8px] flex items-center justify-between  ">
            <p className="md font-rb">Đăng kí đặt báo</p>
            <div
              onClick={ToogleSubscriptionMagazine}
              className="group/hover cursor-pointer p-4"
            >
              <svg
                className="transition-colors duration-300 group-hover/hover:fill-green-06"
                xmlns="http://www.w3.org/2000/svg"
                height="18px"
                viewBox="0 0 24 24"
                width="18px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
              </svg>
            </div>
          </div>
          <div className="form mb-[8px] flex flex-col gap-[6px]">
            <label className=" font-rb text-sm" htmlFor="">
              Họ và tên
            </label>
            <Input
              placeholder=""
              className="font-rm text-xs"
              sx={{
                minHeight: '30px',
                '--Input-focusedInset': 'var(--any, )',
                '--Input-focusedThickness': '0.1rem',
                '--Input-focusedHighlight': '#066D3B',
                '&::before': {
                  transition: 'box-shadow .15s ease-in-out',
                },
                '&:focus-within': {
                  borderColor: '#26b46f',
                },
              }}
            />
          </div>
          <div className="form mb-[8px] flex flex-col gap-[6px]">
            <label className=" font-rb text-sm" htmlFor="">
              Số điện thoại
            </label>
            <Input
              type="number"
              placeholder=""
              className="hide-arrow-input font-rm text-xs"
              sx={{
                minHeight: '30px',
                '--Input-focusedInset': 'var(--any, )',
                '--Input-focusedThickness': '0.1rem',
                '--Input-focusedHighlight': '#066D3B',
                '&::before': {
                  transition: 'box-shadow .15s ease-in-out',
                },
                '&:focus-within': {
                  borderColor: '#066D3B',
                },
              }}
            />
          </div>
          <div className="form mb-[8px] flex flex-col gap-[6px]">
            <label className=" font-rb text-sm" htmlFor="">
              Email
            </label>
            <Input
              placeholder=""
              className="font-rm text-xs"
              sx={{
                minHeight: '30px',
                '--Input-focusedInset': 'var(--any, )',
                '--Input-focusedThickness': '0.1rem',
                '--Input-focusedHighlight': '#066D3B',
                '&::before': {
                  transition: 'box-shadow .15s ease-in-out',
                },
                '&:focus-within': {
                  borderColor: '#066D3B',
                },
              }}
            />
          </div>
          <div className="form mb-[8px] flex flex-col gap-[6px]">
            <label className=" font-rb text-sm" htmlFor="">
              Địa chỉ
            </label>
            <Input
              placeholder=""
              className="font-rm text-xs"
              sx={{
                minHeight: '30px',
                '--Input-focusedInset': 'var(--any, )',
                '--Input-focusedThickness': '0.1rem',
                '--Input-focusedHighlight': '#066D3B',
                '&::before': {
                  transition: 'box-shadow .15s ease-in-out',
                },
                '&:focus-within': {
                  borderColor: '#066D3B',
                },
              }}
            />
          </div>
          <div className="form mb-[8px] flex flex-col gap-[6px]">
            <label className=" font-rb text-sm" htmlFor="">
              Tỉnh/Thành
            </label>
            <Input
              placeholder=""
              className="font-rm text-xs"
              sx={{
                minHeight: '30px',
                '--Input-focusedInset': 'var(--any, )',
                '--Input-focusedThickness': '0.1rem',
                '--Input-focusedHighlight': '#066D3B',
                '&::before': {
                  transition: 'box-shadow .15s ease-in-out',
                },
                '&:focus-within': {
                  borderColor: '#066D3B',
                },
              }}
            />
          </div>
          <div className="form mb-[8px] flex flex-col gap-[6px]">
            <label className=" font-rb text-sm" htmlFor="">
              Quận/Huyện
            </label>
            <Input
              placeholder=""
              className="font-rm text-xs"
              sx={{
                minHeight: '30px',
                '--Input-focusedInset': 'var(--any, )',
                '--Input-focusedThickness': '0.1rem',
                '--Input-focusedHighlight': '#066D3B',
                '&::before': {
                  transition: 'box-shadow .15s ease-in-out',
                },
                '&:focus-within': {
                  borderColor: '#066D3B',
                },
              }}
            />
          </div>
          <div className="form mb-[8px] flex flex-col gap-[6px]">
            <label className="font-rb text-sm" htmlFor="">
              Phường/Xã
            </label>
            <Input
              placeholder=""
              className="font-rm text-xs"
              sx={{
                minHeight: '30px',
                '--Input-focusedInset': 'var(--any, )',
                '--Input-focusedThickness': '0.1rem',
                '--Input-focusedHighlight': '#066D3B',
                '&::before': {
                  transition: 'box-shadow .15s ease-in-out',
                },
                '&:focus-within': {
                  borderColor: '#066D3B',
                },
              }}
            />
          </div>
          <div className="form mb-[8px] flex flex-col gap-[6px]">
            <label className="font-rb text-sm" htmlFor="">
              Ghi chú
            </label>
            <Textarea
              className="font-rr text-sm"
              color="neutral"
              disabled={false}
              minRows={4}
              placeholder="Ghi chú"
              size="md"
              variant="outlined"
            />
          </div>
          <div className="price mb-[8px] flex flex-col">
            <span className="font-rb text-sm">Giá tham khảo:</span>
            <p className="text-sm">Tạp chí hàng tháng: 30.000đ/tháng</p>
          </div>
          <div className="order mb-[8px] flex items-center justify-between ">
            <label htmlFor="" className="font-rb text-sm">
              Nhận tạp chí tại:
            </label>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Radio
                label="Tại toàn soạn"
                className="flex items-center text-sm"
                size="md"
                checked={payment === 'office'}
                onChange={(e) => setPayment(e.target.value)}
                value="office"
                name="radio-buttons"
                sx={{
                  '.MuiSvgIcon-root': {
                    fontSize: 28,
                  },
                  '.Mui-checked': {
                    borderColor: '#066D3B',
                    color: '#066D3B',
                  },
                }}
              />
              <Radio
                label="Qua bưu điện"
                className="flex items-center text-sm"
                size="md"
                checked={payment === 'post'}
                onChange={(e) => setPayment(e.target.value)}
                value="post"
                name="radio-buttons"
                sx={{
                  '.MuiSvgIcon-root': {
                    fontSize: 28,
                  },
                  '.Mui-checked': {
                    color: '#066D3B',
                  },
                }}
              />
            </Box>
          </div>
          <div className="order mb-[8px]  flex items-center justify-between">
            <label htmlFor="" className="font-rb text-sm">
              Thanh toán tại:
            </label>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Radio
                label="Tại toàn soạn"
                className="flex items-center text-sm"
                size="md"
                checked={receive === 'office'}
                onChange={(e) => setReceive(e.target.value)}
                value="office"
                name="radio-buttons"
                sx={{
                  '.MuiSvgIcon-root': {
                    fontSize: 28,
                  },
                  '.Mui-checked': {
                    color: '#066D3B',
                  },
                }}
              />
              <Radio
                label="Qua bưu điện"
                className="flex items-center text-sm"
                size="md"
                checked={receive === 'banking'}
                onChange={(e) => setReceive(e.target.value)}
                value="banking"
                name="radio-buttons"
                sx={{
                  '.MuiSvgIcon-root': {
                    fontSize: 28,
                  },
                  '.Mui-checked': {
                    color: '#066D3B',
                  },
                }}
              />
            </Box>
          </div>
          {/* className="mt-[12px] h-[40px] w-full font-rl text-sm" */}
          {/* sx={{ backgroundColor: '#066D3B',":hover": backgroundColor }} */}
          <Button
            className="mt-[12px] h-[40px] w-full font-rl text-sm"
            variant="outlined"
            color="success"
          >
            Đăng kí
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SubscriptionMarazin;
