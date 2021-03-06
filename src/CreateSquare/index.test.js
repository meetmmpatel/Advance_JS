import createSquare from './index';

// const getLength = str => (typeof str !== 'string' ? 0 : str.length);

test('createSquare', () => {
  expect(createSquare(null)).toBe('');
  expect(createSquare(-1)).toBe('');
  expect(createSquare(0)).toBe('');
  expect(createSquare(1)).toBe('#');
  expect(createSquare(2)).toBe('##\n##');
  expect(createSquare(3)).toBe('###\n# #\n###');
  expect(createSquare(4)).toBe('####\n#  #\n#  #\n####');
  expect(createSquare(10)).toBe(
    [
      '##########',
      '#        #',
      '#        #',
      '#        #',
      '#        #',
      '#        #',
      '#        #',
      '#        #',
      '#        #',
      '##########',
    ].join('\n'),
  );
  expect(createSquare(12)).toBe(
    [
      '############',
      '#          #',
      '#          #',
      '#          #',
      '#          #',
      '#          #',
      '#          #',
      '#          #',
      '#          #',
      '#          #',
      '#          #',
      '############',
    ].join('\n'),
  );
  expect(createSquare(20)).toBe(
    [
      '####################',
      '#                  #',
      '#                  #',
      '#                  #',
      '#                  #',
      '#                  #',
      '#                  #',
      '#                  #',
      '#                  #',
      '#                  #',
      '#                  #',
      '#                  #',
      '#                  #',
      '#                  #',
      '#                  #',
      '#                  #',
      '#                  #',
      '#                  #',
      '#                  #',
      '####################',
    ].join('\n'),
  );
  expect(createSquare(21)).toBe(
    [
      '#####################',
      '#                   #',
      '#                   #',
      '#                   #',
      '#                   #',
      '#                   #',
      '#                   #',
      '#                   #',
      '#                   #',
      '#                   #',
      '#                   #',
      '#                   #',
      '#                   #',
      '#                   #',
      '#                   #',
      '#                   #',
      '#                   #',
      '#                   #',
      '#                   #',
      '#                   #',
      '#####################',
    ].join('\n'),
  );
  expect(createSquare(30)).toBe(
    [
      '##############################',
      '#                            #',
      '#                            #',
      '#                            #',
      '#                            #',
      '#                            #',
      '#                            #',
      '#                            #',
      '#                            #',
      '#                            #',
      '#                            #',
      '#                            #',
      '#                            #',
      '#                            #',
      '#                            #',
      '#                            #',
      '#                            #',
      '#                            #',
      '#                            #',
      '#                            #',
      '#                            #',
      '#                            #',
      '#                            #',
      '#                            #',
      '#                            #',
      '#                            #',
      '#                            #',
      '#                            #',
      '#                            #',
      '##############################',
    ].join('\n'),
  );
  expect(createSquare(33)).toBe(
    [
      '#################################',
      '#                               #',
      '#                               #',
      '#                               #',
      '#                               #',
      '#                               #',
      '#                               #',
      '#                               #',
      '#                               #',
      '#                               #',
      '#                               #',
      '#                               #',
      '#                               #',
      '#                               #',
      '#                               #',
      '#                               #',
      '#                               #',
      '#                               #',
      '#                               #',
      '#                               #',
      '#                               #',
      '#                               #',
      '#                               #',
      '#                               #',
      '#                               #',
      '#                               #',
      '#                               #',
      '#                               #',
      '#                               #',
      '#                               #',
      '#                               #',
      '#                               #',
      '#################################',
    ].join('\n'),
  );
  expect(createSquare(50)).toBe(
    [
      '##################################################',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '#                                                #',
      '##################################################',
    ].join('\n'),
  );
  expect(createSquare(80)).toBe(
    [
      '################################################################################',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '#                                                                              #',
      '################################################################################',
    ].join('\n'),
  );
  // expect(getLength(createSquare(2020))).toBe(4082419);
  // expect(getLength(createSquare(3018))).toBe(9111341);
  // expect(getLength(createSquare(4025))).toBe(16204649);
  // expect(getLength(createSquare(7542))).toBe(56889305);
  // expect(getLength(createSquare(8000))).toBe(64007999);
  // expect(getLength(createSquare(9856))).toBe(97150591);
  // expect(getLength(createSquare(10235))).toBe(104765459);
  // expect(getLength(createSquare(12540))).toBe(157264139);
  // expect(getLength(createSquare(13021))).toBe(169559461);
  // expect(getLength(createSquare(15465))).toBe(239181689);
  // expect(getLength(createSquare(16200))).toBe(262456199);
  // expect(getLength(createSquare(16383))).toBe(268419071);
});
