const SocialLinks = ({
  href,
  width = '20',
  height = '20',
  dPath,
  fillColor = '#2C7566',
  fillRule = 'nonzero',
}) => {
  return (
    <div>
      <a href={href}>
        <svg width={width} height={height}>
          <path d={dPath} fill={fillColor} fillRule={fillRule} />
        </svg>
      </a>{' '}
    </div>
  );
};

export default SocialLinks;
