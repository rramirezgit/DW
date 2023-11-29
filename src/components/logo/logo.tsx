import { forwardRef } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Box, { BoxProps } from '@mui/material/Box';
// routes
import { RouterLink } from 'src/routes/components';
import { useResponsive } from 'src/hooks/use-responsive';

// ----------------------------------------------------------------------

export interface LogoProps extends BoxProps {
  disabledLink?: boolean;
  mini?: boolean;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, mini = false, sx, ...other }, ref) => {
    const theme = useTheme();

    const smD = useResponsive('down', 'sm');

    const PRIMARY_LIGHT = theme.palette.primary.light;

    const PRIMARY_MAIN = theme.palette.primary.main;

    const PRIMARY_DARK = theme.palette.primary.dark;

    // OR using local (public folder)
    // -------------------------------------------------------
    // const logo = (
    //   <Box
    //     component="img"
    //     src="/logo/logo_single.svg" => your path
    //     sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
    //   />
    // );

    const logo = (
      <Box
        ref={ref}
        component="div"
        sx={{
          width: 'auto',

          padding: 1,
          ...sx,
        }}
        {...other}
      >
        {!smD ? (
          <svg
            width="195"
            height="39"
            viewBox="0 0 195 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_605_25891)" filter="url(#filter0_d_605_25891)">
              <path
                d="M11.8786 2.09644H1.85547V28.6736H11.8786C19.6996 28.6736 25.3562 23.0925 25.3562 15.385C25.3562 7.67745 19.6996 2.09644 11.8786 2.09644ZM11.7629 23.3572H7.58775V7.45056H11.7629C16.3207 7.45056 19.4705 10.6759 19.4705 15.385C19.4705 20.0162 16.3207 23.3572 11.7629 23.3572Z"
                fill="#EB5117"
              />
              <path
                d="M46.3105 8.17101L45.7411 10.1062C43.9571 8.55138 41.6415 7.60156 38.9834 7.60156C32.8329 7.60156 28.2373 12.2328 28.2373 18.421C28.2373 24.6115 32.8329 29.2806 38.9834 29.2806C41.6037 29.2806 43.8815 28.3686 45.6277 26.8137L46.1215 28.6733H50.4502V8.17101H46.3105ZM39.4394 24.0421C36.2118 24.0421 33.8584 21.6108 33.8584 18.421C33.8584 15.1957 36.2118 12.8022 39.4394 12.8022C42.6648 12.8022 45.0204 15.1957 45.0204 18.421C45.0204 21.6486 42.6648 24.0421 39.4394 24.0421Z"
                fill="#EB5117"
              />
              <path
                d="M65.8248 23.7396C63.7739 23.7396 62.635 22.6007 62.635 20.6254V12.6532H68.216V8.17325H62.5594V2.85693H61.4961L53.4082 11.4387V12.6532H57.0918V21.3862C57.0918 25.9039 59.8634 28.6755 64.3812 28.6755H68.3317V23.7396H65.8248Z"
                fill="#EB5117"
              />
              <path
                d="M88.8311 8.17101L88.2616 10.1062C86.4776 8.55138 84.162 7.60156 81.5039 7.60156C75.3534 7.60156 70.7578 12.2328 70.7578 18.421C70.7578 24.6115 75.3534 29.2806 81.5039 29.2806C84.1242 29.2806 86.402 28.3686 88.1482 26.8137L88.642 28.6733H92.9707V8.17101H88.8311ZM81.9599 24.0421C78.7323 24.0421 76.3789 21.6108 76.3789 18.421C76.3789 15.1957 78.7323 12.8022 81.9599 12.8022C85.1853 12.8022 87.5409 15.1957 87.5409 18.421C87.5409 21.6486 85.1853 24.0421 81.9599 24.0421Z"
                fill="#EB5117"
              />
              <path
                d="M128.614 2.10107L123.487 19.7561L116.349 2.40359H114.413L107.427 19.7939L102.188 2.10107H96.1133L104.466 28.6782H109.591L115.363 13.7947L121.285 28.6782H126.412L134.613 2.10107H128.614Z"
                fill="white"
              />
              <path
                d="M137.837 5.43556H143.342V0.310547H137.837V5.43556ZM137.837 28.6716H143.38V8.16935H137.837V28.6716Z"
                fill="white"
              />
              <path
                d="M160.349 7.71362C157.578 7.71362 155.109 8.89033 153.554 10.7121L152.49 8.16962H148.693V28.6719H154.237V17.9281C154.237 14.6248 155.983 12.5739 158.83 12.5739C161.223 12.5739 162.4 14.0554 162.4 17.1673V28.6719H167.943V16.2575C167.943 11.0547 165.018 7.71362 160.349 7.71362Z"
                fill="white"
              />
              <path
                d="M189.582 8.17101L188.67 10.2219C186.886 8.5892 184.533 7.60156 181.875 7.60156C176.14 7.60156 171.66 12.1571 171.66 17.8894C171.66 23.6617 176.14 28.1795 181.875 28.1795C184.077 28.1795 186.088 27.4966 187.72 26.3577V27.1162C187.72 30.1169 185.405 31.9387 182.595 31.9387C180.544 31.9387 178.382 30.9889 177.735 29.1293H172.23C173.179 33.7983 177.128 36.6455 182.671 36.6455C189.164 36.6455 193.15 32.7351 193.15 26.3199V8.20882L189.582 8.17101ZM182.52 23.2057C179.483 23.2057 177.281 20.9658 177.281 17.9294C177.281 14.8531 179.483 12.6131 182.52 12.6131C185.558 12.6131 187.76 14.8531 187.76 17.9294C187.76 20.9658 185.558 23.2057 182.52 23.2057Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_605_25891"
                x="0.722852"
                y="0.191162"
                width="193.517"
                height="38.4554"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="1.06328" />
                <feGaussianBlur stdDeviation="0.531641" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_605_25891"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_605_25891"
                  result="shape"
                />
              </filter>
              <clipPath id="clip0_605_25891">
                <rect
                  width="191.391"
                  height="36.3288"
                  fill="white"
                  transform="translate(1.78613 0.191162)"
                />
              </clipPath>
            </defs>
          </svg>
        ) : (
          <svg
            width="69"
            height="32"
            viewBox="0 0 69 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_832_15713)">
              <path
                d="M11.0925 1.90527H1.06934V28.4824H11.0925C18.9135 28.4824 24.5701 22.9014 24.5701 15.1938C24.5701 7.48629 18.9135 1.90527 11.0925 1.90527ZM10.9768 23.1661H6.80161V7.2594H10.9768C15.5346 7.2594 18.6844 10.4848 18.6844 15.1938C18.6844 19.825 15.5346 23.1661 10.9768 23.1661Z"
                fill="#EB5117"
              />
              <path
                d="M61.5007 2L56.3735 19.6551L49.2354 2.30252H47.3001L40.3133 19.6929L35.0748 2H29L37.3526 28.5771H42.4776L48.25 13.6937L54.1713 28.5771H59.2985L67.4999 2H61.5007Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_832_15713"
                x="-0.0632812"
                y="0"
                width="70.1266"
                height="34.1266"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="1.06328" />
                <feGaussianBlur stdDeviation="0.531641" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_832_15713"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_832_15713"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        )}
      </Box>
    );

    if (disabledLink) {
      return logo;
    }

    return (
      <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
        {logo}
      </Link>
    );
  }
);

export default Logo;
